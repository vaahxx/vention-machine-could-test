/**
 * This file was automatically generated by tools/generators/generate-cache-file.js file
 */

import { producstApi } from "./product-endpoints"

export const addProductsCacheKeys = () =>
  producstApi.enhanceEndpoints({
    endpoints: {
      getManyProducts: { providesTags: ["products"] },
      updateOneProduct: { invalidatesTags: ["products"] },
    },
  })
export const addGeneratedCacheKeys = () => {
  addProductsCacheKeys()
}
