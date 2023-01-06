import fs from "fs"
import path from "path"

import { Command } from "clipanion"
import camelCase from "lodash/camelCase"
import capitalize from "lodash/capitalize"
import kebabCase from "lodash/kebabCase"

import { walk } from "../utils"

export class GenerateCacheKeyFile extends Command {
  static paths = [["generate-cache-key-file"]]

  static usage = Command.Usage({
    category: "generators",
    description: "This script will generate the required cache key files for your redux webapp.",
    examples: [["A basic example", "npm run ventionMachineCloudTest-cli generate-cache-key-file"]],
  })

  async execute(): Promise<number | void> {
    const endpointsPath = path.join(__dirname, "../apps/webapp/src/redux/endpoints")
    const importStatements = []
    const cacheKeys = []
    let cacheFileContent = `/**
 * This file was automatically generated by tools/generators/generate-cache-file.js file
 */

IMPORT_STATEMENTS

`

    for await (const pathName of walk(endpointsPath, [])) {
      const isEndpointsFile = fs.lstatSync(pathName).isFile() && pathName.includes("-endpoints")
      if (isEndpointsFile) {
        const cacheKey = camelCase(path.basename(pathName, ".ts").replace("-endpoints", ""))
        cacheKeys.push(cacheKey)
        const endpointsSelectorRegex = /build => \(({[\s\S]+overrideExisting: false,\s+})/m
        const endpointsObjectString = fs.readFileSync(pathName, { encoding: "utf8" }).match(endpointsSelectorRegex)[1]
        const endpointSelectorRegex = /([a-z-A-Z]+): build.[qm]/gm
        const endpointNames = [...endpointsObjectString.matchAll(endpointSelectorRegex)].map(entries => [entries[1]]).flat()

        if (endpointNames.length > 0) {
          importStatements.push(`import { ${cacheKey}Api } from "./${kebabCase(cacheKey)}-endpoints"`)
          cacheFileContent += `export const add${capitalize(cacheKey)}CacheKeys = () =>
  ${cacheKey}Api.enhanceEndpoints({
    endpoints: {
${endpointNames
  .map(endpointName => {
    const tagPropertyKey = endpointName.includes("get") ? "providesTags" : "invalidatesTags"
    return `      ${endpointName}: { ${tagPropertyKey}: ["${cacheKey}"] },`
  })
  .join("\n")}
    },
  })\n`
        }
      }
    }

    cacheFileContent = cacheFileContent.replace("IMPORT_STATEMENTS", importStatements.map(importStatement => importStatement).join("\n"))
    cacheFileContent += `export const addGeneratedCacheKeys = () => {
  ${cacheKeys.map(cacheKey => `add${capitalize(cacheKey)}CacheKeys()`).join("\n")}
}\n`

    fs.writeFileSync(`${endpointsPath}/generated-cache-keys.ts`, cacheFileContent, { encoding: "utf8" })
    console.info(`Generated ${endpointsPath}/generated-cache-keys.ts`)
  }
}