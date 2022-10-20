import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const iframeContainer = style({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  paddingTop: "80%"
//   "@media": {
//     [media.small]: {
//       display: "block",
//       paddingTop: theme.space[4],
//     },
//   },
})

export const responsiveIframe = style({
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%"
  })