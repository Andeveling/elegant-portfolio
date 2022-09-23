import { PublicRoutes } from '@/routes'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { Button, Navbar, Text } from '@nextui-org/react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  const collapseItems = ['Home', 'Work', 'About', 'Contact']

  const [isActive, setActive] = useState<boolean>(false)

  const iconHandler = (): void => setActive(!isActive)

  return (
    <Navbar variant='floating' maxWidth='fluid'>
      <Navbar.Brand>
        <Navbar.Toggle aria-label='toggle navigation' showIn='xs'>
          {isActive ? (
            <CloseIcon onClick={iconHandler} fontSize='large' />
          ) : (
            <MenuIcon onClick={iconHandler} fontSize='large' />
          )}
        </Navbar.Toggle>

        <Text h4>Andres Parra</Text>
      </Navbar.Brand>
      <Button.Group color='secondary' light>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={index}>
              <Button>{item}</Button>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Button.Group>

      <Navbar.Content activeColor='warning' hideIn='xs' variant='default'>
        <Navbar.Link href='#home'>Home</Navbar.Link>
        <Navbar.Link href='#about'>About</Navbar.Link>
        <Navbar.Link href='#works'>Work</Navbar.Link>
        <Navbar.Link href='#'>Contact</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  )
}
