import { useGetManyProductsQuery } from "../../redux/endpoints/product-endpoints"
import { ProductList } from "./components/ProductList"

export const ProductsPage: React.FC = () => {
  const { data } = useGetManyProductsQuery({
    sort: ["id,DESC"],
  })

  return (
    <>
      <h1>Flower Shop</h1>
      <ProductList products={data} />
    </>
  )
}
