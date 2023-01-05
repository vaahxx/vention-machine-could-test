import { ProductCard } from "../ProductCard/index"
import { useProductListStyles } from "./styles"

interface Props {}

const products = [
  {
    name: "Red flower",
    image:
      "https://www.freepnglogos.com/uploads/flour-png/flour-flower-png-transparent-png-images-pluspng-2.png",
    price: 40.0,
    rating: 4.5,
    inCart: true,
  },
  {
    name: "Peach flower",
    image:
      "https://www.freepnglogos.com/uploads/flour-png/flour-peach-flower-png-16.png",
    price: 45.0,
    rating: 3.5,
    inCart: true,
  },
  {
    name: "Pink flower",
    image:
      "https://www.freepnglogos.com/uploads/flour-png/flour-flower-images-transparent-background-19.png",
    price: 30.0,
    rating: 5,
    inCart: false,
  },
]

export const ProductList: React.FC<Props> = () => {
  const classes = useProductListStyles()
  return (
    <div className={classes.cardsContainer}>
      {products.map(product => (
        <ProductCard product={product} />
      ))}
    </div>
  )
}
