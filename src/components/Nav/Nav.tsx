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
      id: 1,
      href: '/#home',
      content: t('nav.menu.home'),
    },
    {
      id: 2,
      href: '/#works',
      content: t('nav.menu.projects'),
    },
    {
      id: 3,
      href: '/#about',
      content: t('nav.menu.about'),
    },
    {
      id: 4,
      href: '/#skills',
      content: t('nav.menu.skills'),
    },
    {
      id: 5,
      href: '/#awards',
      content: t('nav.menu.awards'),
    },
    {
      id: 6,
      href: t('nav.menu.cv.href'),
      content: t('nav.menu.cv.title'),
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
            return link.content === t('nav.menu.cv.title') ? (
              <Navbar.CollapseItem key={link.id}>
                <Link href={link.href as string} target='_blank'>
                  <Text size='$xl' b css={css.links}>
                    {link.content}
                  </Text>
                </Link>
              </Navbar.CollapseItem>
            ) : (
              <Navbar.CollapseItem key={link.id}>
                <Link href={link.href as string}>
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
            return link.content === t('nav.menu.cv.title') ? (
              <Navbar.Link key={link.id} href={link.href as string} target='_blank'>
                <Text size='$xl' b css={css.links}>
                  {link.content}
                </Text>
              </Navbar.Link>
            ) : (
              <Navbar.Link key={link.id} href={link.href as string} activeColor='warning'>
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
