import { createTheme } from '@nextui-org/react'

export const Theme = createTheme({
  type: 'light', // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '$gray200',
      primaryLightHover: '$gray300',
      primaryLightActive: '$gray400',
      primaryLightContrast: '$gray600',
      primary: '#241b2f',
      primaryBorder: '$gray500',
      primaryBorderHover: '$gray600',
      primarySolidHover: '$gray700',
      primarySolidContrast: '$white',
      primaryShadow: '$gray500',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd',

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
})
