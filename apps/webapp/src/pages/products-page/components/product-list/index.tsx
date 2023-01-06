import { Product } from "@ventionMachineCloudTest/models"
import React from "react"

import { ProductCard } from "../product-card"
import { useProductListStyles } from "./styles"

interface Props {
  products: Product[]
}

export const ProductList: React.FC<Props> = ({ products }) => {
  const classes = useProductListStyles()

  return (
    <div className={classes.cardsContainer}>
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
