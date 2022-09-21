import { createTheme } from "@nextui-org/react"

export const Theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {},
    space: {},
    fonts: {},
  },
})

export const DarkTheme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {},
    space: {},
    fonts: {},
  },
})

//   primaryLight: "$green200",
//   primaryLightHover: "$green300",
//   primaryLightActive: "$green400",
//   primaryLightContrast: "$green600",
//   primary: "#4ADE7B",
//   primaryBorder: "$green500",
//   primaryBorderHover: "$green600",
//   primarySolidHover: "$green700",
//   primarySolidContrast: "$white",
//   primaryShadow: "$green500",
