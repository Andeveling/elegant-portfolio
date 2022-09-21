import { createTheme } from "@nextui-org/react"

export const Theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primary: "#171520",
      secondary: "#241b2f",
      gradient: "linear-gradient(90deg, rgba(34,34,34,1) 0%, rgba(0,0,0,1) 100%)",
      link: "#5E1DAD",
      // you can also create your own color
      myColor: "#ff4ecd",
      // ...  more colors
    },
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
