import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, Navbar, Text } from '@nextui-org/react'
import { useState } from 'react'
import { ScrollToTop, Logo } from '@/components'

export default function Nav() {
  const collapseItems = ['home', 'works', 'about', 'skills']
  const [isActive, setActive] = useState<boolean>(false)
  const iconHandle = (): void => setActive(!isActive)

  return (
    <>
      <Navbar variant='sticky'>
        <Navbar.Brand>
          <Navbar.Toggle aria-label='toggle navigation' showIn='xs'>
            {isActive ? (
              <CloseIcon onClick={iconHandle} fontSize='large' />
            ) : (
              <MenuIcon onClick={iconHandle} fontSize='large' />
            )}
          </Navbar.Toggle>

          <Logo name='Andeveling' />
        </Navbar.Brand>

        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={index}>
              <Text onClick={iconHandle} h4 b>
                <Link href={`#${item}`}>{item}</Link>
              </Text>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>

        <Navbar.Content enableCursorHighlight activeColor='warning' hideIn='xs' variant='underline'>
          <Text h4 b>
            <Navbar.Link href='#home'>Home</Navbar.Link>
          </Text>
          <Text h4 b>
            <Navbar.Link href='#works'>Projects</Navbar.Link>
          </Text>
          <Text h4 b>
            <Navbar.Link href='#about'>About</Navbar.Link>
          </Text>
          <Text h4 b>
            <Navbar.Link href='#skills'>Skills</Navbar.Link>
          </Text>
        </Navbar.Content>
      </Navbar>
      <ScrollToTop />
    </>
  )
}
