import { Switch } from '@nextui-org/react'
import { SunIcon } from '../Icons/SunIcon'
import { MoonIcon } from '../Icons/MooIcon'
import { useTheme } from '@/context/ThemeContext'

export const ChangeTheme = () => {
  const { handleTheme, theme } = useTheme()

  return (
    <Switch
      size='xl'
      borderWeight='extrabold'
      color='success'
      checked={theme.isDark}
      onChange={handleTheme}
      iconOn={<SunIcon filled />}
      iconOff={<MoonIcon filled />}
      css={{ mx: 10 }}
    />
  )
}
