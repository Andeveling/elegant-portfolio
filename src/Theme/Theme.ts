import { createTheme } from '@nextui-org/react'

export const Theme = createTheme({
  type: 'light', // it could be "light" or "dark"
  theme: {
    colors: {
      background: '#2f2441',
      // brand colors
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#2f2441',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      gold: '#7c6f3b',
      // you can also create your own color
      myColor: '#ff4ecd',

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
})

export const DarkTheme = createTheme({
  type: 'dark', // it could be "light" or "dark"
  theme: {
    colors: {},
    space: {},
    fonts: {},
  },
})

export const fonts = {
  sans: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto','Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
}
