import { Theme } from "@mui/material"
import { pink } from "@mui/material/colors"
import { makeStyles } from "@mui/styles"

export const useProductListStyles = makeStyles((theme: Theme) => ({
  cardsContainer: {
    display: "flex",
    gap: "1.5rem",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
}))
