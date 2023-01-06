/**
 * This file was automatically generated by tools/generators/generate-cache-file.js file
 */

import { producstApi } from "./product-endpoints"
import { ratingsApi } from "./ratings-endpoints"

export const addProductsCacheKeys = () =>
  producstApi.enhanceEndpoints({
    endpoints: {
      getManyProducts: { providesTags: ["products"] },
    },
  })
export const addRatingCacheKeys = () =>
  ratingsApi.enhanceEndpoints({
    endpoints: {
      createOneRating: { invalidatesTags: ["ratings"] },
    },
  })
export const addGeneratedCacheKeys = () => {
  addProductsCacheKeys()
}