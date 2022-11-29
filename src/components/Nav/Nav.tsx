import { Logo, MiniSocial } from '@/components'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { Badge, Link, Navbar, Text } from '@nextui-org/react'
import { useState } from 'react'

export default function Nav() {
  const collapseItems = ['Home', 'Works', 'About', 'Skills', 'Awards']
  const [isActive, setActive] = useState<boolean>(false)
  const iconHandle = (): void => setActive(!isActive)

  return (
    <>
      <Navbar variant='floating' css={{ zIndex: 1000 }}>
        <Navbar.Brand>
          <Navbar.Toggle aria-label='toggle navigation' showIn='xs'>
            {isActive ? (
              <CloseIcon onClick={iconHandle} fontSize='large' />
            ) : (
              <MenuIcon onClick={iconHandle} fontSize='large' />
            )}
          </Navbar.Toggle>

          <Logo name='Andeveling' />
          <MiniSocial />
        </Navbar.Brand>

        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={index}>
              <Text h4 b>
                <Link
                  css={{
                    color: '$text',
                    '&:hover': {
                      color: '$warning',
                    },
                  }}
                  href={`/#${item.toLowerCase()}`}>
                  {item}
                </Link>
              </Text>
            </Navbar.CollapseItem>
          ))}
          <Navbar.CollapseItem>
            <Text h4 b>
              <Link
                css={{
                  color: '$text',
                  '&:hover': {
                    color: '$warning',
                  },
                }}
                href={`https://docs.google.com/document/d/1VwQAKk-Ei2Orp-374Cxvb8OxmEgBWeqVzoGvp8ECQAg/edit?usp=sharing`}
                target='_blank'>
                Curriculum
              </Link>
            </Text>
          </Navbar.CollapseItem>
        </Navbar.Collapse>

        <Navbar.Content enableCursorHighlight activeColor='warning' hideIn='xs'>
          <Text h4 b>
            <Navbar.Link href='/#home'>Home</Navbar.Link>
          </Text>
          <Text h4 b>
            <Navbar.Link href='/#works'>Projects</Navbar.Link>
          </Text>
          <Text h4 b>
            <Navbar.Link href='/#about'>About</Navbar.Link>
          </Text>
          <Text h4 b>
            <Navbar.Link href='/#skills'>Skills</Navbar.Link>
          </Text>
          <Text h4 b>
            <Navbar.Link href='/#awards'>
              {' '}
              <Badge color='success' variant='dot' />
              Awards
            </Navbar.Link>
          </Text>
          <Text h4 b>
            <Navbar.Link
              color={'warning'}
              href='https://docs.google.com/document/d/1VwQAKk-Ei2Orp-374Cxvb8OxmEgBWeqVzoGvp8ECQAg/edit?usp=sharing'
              target='_blank'>
              Curriculum
            </Navbar.Link>
          </Text>
        </Navbar.Content>
      </Navbar>
    </>
  )
}
