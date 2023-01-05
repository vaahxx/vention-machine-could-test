import { ProductList } from "./components/ProductList"

interface Props {}

export const ProductsPage: React.FC<Props> = () => {
  return (
    <>
      <h1>Flower Shop</h1>
      <ProductList />
    </>
  )
}
