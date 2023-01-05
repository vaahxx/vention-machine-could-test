import { Badge, Button, Card, CardContent, Rating, Stack } from "@mui/material"
import { Product } from "@ventionMachineCloudTest/models"

import { useProductCardStyles } from "./styles"

interface Props {
  product: Product & {
    inCart?: boolean
  }
}

export const ProductCard: React.FC<Props> = ({
  product: { name, image, price, rating, inCart },
}) => {
  const classes = useProductCardStyles()
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
            <img src={image} />
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
            <span className={classes.productName}>{name}</span>
            <span className={classes.productPrice}>${price}</span>
            <Rating
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
              value={rating}
              onChange={(event, newValue) => {
                // setRatings(prevState => [...prevState, { ...rating: newValue }])
              }}
            />
          </Stack>
        </CardContent>
      </Card>
    </Badge>
  )
}
