import { Product } from "@ventionMachineCloudTest/models"

import { ProductCard } from "../ProductCard/index"
import { useProductListStyles } from "./styles"

interface Props {
  products: Product[]
}

export const ProductList: React.FC<Props> = ({ products }) => {
  const classes = useProductListStyles()
  return (
    <div className={classes.cardsContainer}>
      {products?.map((product, key) => (
        <ProductCard key={key} product={product} />
      ))}
    </div>
  )
}
