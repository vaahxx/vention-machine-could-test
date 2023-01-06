import { useGetManyProductsQuery } from "../../redux/endpoints/product-endpoints"
import { ProductList } from "./components/product-list"

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
