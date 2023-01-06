import { Badge, Button, Card, CardContent, Rating, Stack } from "@mui/material"
import { Product } from "@ventionMachineCloudTest/models"
import React from "react"
import { useEffect, useState } from "react"

import {
  useLazyGetOneProductQuery,
  useUpdateOneProductMutation,
} from "../../../../redux/endpoints/product-endpoints"
import { useCreateOneRatingMutation } from "../../../../redux/endpoints/ratings-endpoints"
import { useProductCardStyles } from "./styles"

interface Props {
  product: Product
}

export const ProductCard: React.FC<Props> = ({
  product: { id, name, image, price, avg_rating, in_cart },
}) => {
  const classes = useProductCardStyles()
  const [createRating] = useCreateOneRatingMutation()
  const [updateProduct] = useUpdateOneProductMutation()
  const [getProduct, { data }] = useLazyGetOneProductQuery({
    selectFromResult: ({ data }) => ({
      data: data?.find(product => product.id === id),
    }),
  })
  const [product, setProduct] = useState<Product>(null)

  useEffect(() => {
    if (data) {
      setProduct(data)
    }
  }, [data])

  async function handleRatingChange(value: number) {
    await createRating({
      rating: { product_id: id, value },
    })
    getProduct(id)
  }

  async function handleClick(updatedInCart: boolean): Promise<void> {
    const product = { name, image, price, avg_rating, in_cart: updatedInCart }
    try {
      const response = await updateProduct({ id, product })
      setProduct((response as { data: Product }).data)
    } catch (err) {
      console.log(err)
    }
  }

  const actuallyInCart = product?.in_cart ?? in_cart

  return (
    <Badge
      badgeContent="In Cart"
      invisible={!actuallyInCart}
      color="success"
      classes={{ root: classes.badge }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Stack className={classes.productImage}>
            <img src={product?.image || image} />
            <div className={classes.overlay} />
            <Button
              variant="contained"
              color={actuallyInCart ? "error" : "success"}
              className={classes.cardButton}
              onClick={() => handleClick(!actuallyInCart)}
            >
              {actuallyInCart ? "Remove from cart" : "Add to cart"}
            </Button>
          </Stack>
          <Stack className={classes.productFooter}>
            <span className={classes.productName}>{product?.name || name}</span>
            <span className={classes.productPrice}>
              ${product?.price || price}
            </span>
            <Rating
              name="half-rating"
              precision={1}
              value={Number(product?.avg_rating) || Number(avg_rating)}
              onChange={(_, newValue) => {
                handleRatingChange(newValue)
              }}
            />
          </Stack>
        </CardContent>
      </Card>
    </Badge>
  )
}
