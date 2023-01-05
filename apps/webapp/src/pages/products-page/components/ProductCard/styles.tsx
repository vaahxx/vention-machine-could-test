import { Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"

export const useProductCardStyles = makeStyles(() => ({
  card: {
    maxWidth: "21.8rem",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
  },
  productImage: {
    position: "relative",
    ["& img"]: {
      objectFit: "contain",
      width: "100%",
      height: "100%",
    },
    ["&:hover $overlay"]: {
      opacity: "0.5",
    },
    ["&:hover $cardButton"]: {
      opacity: "1",
    },
  },
  productFooter: {
    display: "flex",
    flexDirection: "column",
    borderTop: "1px solid #a6a6a6",
    height: "4rem",
    padding: "0.5rem",
    alignItems: "center",
  },
  productName: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  productPrice: {
    color: "#676767",
  },
  overlay: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    width: "100%",
    height: "100%",
    opacity: "0",
    backgroundColor: "#FFF",
    transition: "all 0.2s",
    cursor: "pointer",
  },
  cardButton: {
    opacity: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -10rem)",
  },
  badge: {
    ["& > span"]: {
      borderRadius: "100%",
      width: "3.5rem",
      height: "3.5rem",
    },
  },
}))
