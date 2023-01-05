import { api } from "../api"
const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    createOneRating: build.mutation<
      CreateOneRatingApiResponse,
      CreateOneRatingApiArg
    >({
      query: queryArg => ({
        url: `/api/ratings`,
        method: "POST",
        body: queryArg.rating,
      }),
    }),
  }),
  overrideExisting: false,
})
export { injectedRtkApi as ratingsApi }

export type CreateOneRatingApiResponse =
  /** status 201 Get create one base response */ Rating
export type CreateOneRatingApiArg = {
  rating: Rating
}

export type Rating = {
  value: number
  id?: number
  product_id: number
  createdAt?: string
  updatedAt?: string
}

export const { useCreateOneRatingMutation } = injectedRtkApi
