import { CssBaseline } from "@mui/material"
import React from "react"

import { ProductsPage } from "../pages/products-page/products-page"
import { useAppStyles } from "./app.styles"

export const App = () => {
  const classes = useAppStyles()

  return (
    <>
      <CssBaseline />
      <div className={classes.app}>
        <ProductsPage />
      </div>
    </>
  )
}
