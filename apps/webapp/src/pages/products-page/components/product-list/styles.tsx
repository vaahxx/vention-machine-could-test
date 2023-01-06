import { Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"

export const useProductListStyles = makeStyles((theme: Theme) => ({
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1.5rem",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
}))
