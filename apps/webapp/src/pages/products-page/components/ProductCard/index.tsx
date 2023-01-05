import { Badge, Button, Card, CardContent, Rating, Stack } from "@mui/material"
import { Product } from "@ventionMachineCloudTest/models"
import { useLazyGetOneProductQuery } from "apps/webapp/src/redux/endpoints/product-endpoints"
import { useCreateOneRatingMutation } from "apps/webapp/src/redux/endpoints/ratings-endpoints"
import { useEffect, useState } from "react"

import { useProductCardStyles } from "./styles"

interface Props {
  product: Product
}

export const ProductCard: React.FC<Props> = ({
  product: { id, name, image, price, avg_rating },
}) => {
  const inCart = true
  const classes = useProductCardStyles()
  const [createRating] = useCreateOneRatingMutation()
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

  async function handleRatingChange(value) {
    await createRating({
      rating: { product_id: id, value },
    })
    getProduct(id)
  }

  return (
    <Badge
      badgeContent="In Cart"
      invisible={!inCart}
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
            {inCart ? (
              <Button
                variant="contained"
                color="error"
                className={classes.cardButton}
                // onClick={handleRemoveFromCart(product)}
              >
                {"Remove from cart"}
              </Button>
            ) : (
              <Button
                variant="contained"
                color="success"
                className={classes.cardButton}
                // onClick={handleAddToCart(product)}
              >
                {"Add to cart"}
              </Button>
            )}
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
