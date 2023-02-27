import { DarkTheme } from '@/Theme'
import { NextUIProvider } from '@nextui-org/react'
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from 'react'

export interface ThemeContextI {
  isDark: boolean
  setIsDark: Dispatch<SetStateAction<boolean>>
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
}
export const ThemeContext = createContext<ThemeContextI>({} as ThemeContextI)

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [isDark, setIsDark] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const values: ThemeContextI = { isDark, setIsDark, currentPage, setCurrentPage }
  return (
    <ThemeContext.Provider value={values}>
      <NextUIProvider theme={DarkTheme}>{children}</NextUIProvider>
      {/* <NextUIProvider theme={isDark ? DarkTheme : Theme}>{children}</NextUIProvider> */}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const theme = useContext(ThemeContext)
  const handleTheme = () => theme.setIsDark((state) => !state)
  return { theme, handleTheme }
}
