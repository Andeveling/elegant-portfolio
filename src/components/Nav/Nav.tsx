import { Logo } from '@/components'
import { AllCSS } from '@/models/AllCss.model'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, Navbar, Text } from '@nextui-org/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChangeLanguageButton } from '../ChangeLanguageButton'

export default function Nav() {
  const [isActive, setActive] = useState<boolean>(false)
  const { t, i18n } = useTranslation(['nav', 'header', 'projects', 'skills', 'awards'])
  const iconHandle = (): void => setActive(!isActive)

  const css: AllCSS = {
    links: {
      color: '$text',
      '&:hover': {
        color: '$warning',
      },
      '&:active': {
        color: '$warning',
      },
    },
  }

  const links = [
    {
      href: '/#home',
      content: t('nav.menu.home'),
    },
    {
      href: '/#works',
      content: t('nav.menu.projects'),
    },
    {
      href: '/#about',
      content: t('nav.menu.about'),
    },
    {
      href: '/#skills',
      content: t('nav.menu.skills'),
    },
    {
      href: '/#awards',
      content: t('nav.menu.awards'),
    },
    {
      href: 'https://docs.google.com/document/d/12w5OUXyvkhuErQT2KIqkYqNKXWGOu0fCu13TWffTB9Q/edit?usp=sharing',
      content: t('nav.menu.cv'),
    },
  ]

  const languageHandle = () => {
    i18n.language === 'es' ? i18n.changeLanguage('en') : i18n.changeLanguage('es')
  }
  return (
    <>
      <Navbar variant='floating' css={{ zIndex: 1000 }}>
        <Navbar.Brand>
          <Navbar.Toggle aria-label='toggle navigation' showIn='lg'>
            {isActive ? (
              <CloseIcon onClick={iconHandle} sx={{ fontSize: 50 }} />
            ) : (
              <MenuIcon onClick={iconHandle} sx={{ fontSize: 50 }} />
            )}
          </Navbar.Toggle>

          <Logo name='Andeveling' />
          <Navbar.Content css={{ ml: 20 }}>
            <ChangeLanguageButton languageHandle={languageHandle} lang={i18n.language as 'es' | 'en'} />
          </Navbar.Content>
        </Navbar.Brand>

        <Navbar.Collapse>
          {links.map((link) => {
            return link.content === t('nav.menu.cv') ? (
              <Navbar.CollapseItem key={link.href}>
                <Link href={link.href} target='_blank'>
                  <Text size='$xl' b css={css.links}>
                    {link.content}
                  </Text>
                </Link>
              </Navbar.CollapseItem>
            ) : (
              <Navbar.CollapseItem key={link.href}>
                <Link href={link.href}>
                  <Text size='$xl' b css={css.links}>
                    {link.content}
                  </Text>
                </Link>
              </Navbar.CollapseItem>
            )
          })}
        </Navbar.Collapse>

        <Navbar.Content activeColor='warning' hideIn='lg'>
          {links.map((link) => {
            return link.content === t('nav.menu.cv') ? (
              <Navbar.Link key={link.href} href={link.href} target='_blank'>
                <Text size='$xl' b css={css.links}>
                  {link.content}
                </Text>
              </Navbar.Link>
            ) : (
              <Navbar.Link key={link.href} href={link.href} activeColor='warning'>
                <Text size='$xl' b css={css.links}>
                  {link.content}
                </Text>
              </Navbar.Link>
            )
          })}
        </Navbar.Content>
      </Navbar>
    </>
  )
}
