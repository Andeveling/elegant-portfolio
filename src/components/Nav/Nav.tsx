import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { Button, Navbar, Text, Spacer } from '@nextui-org/react'
import { useState } from 'react'

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

        <Text h3 color='$warningLightContrast'>
          Andeveling
        </Text>
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
        <Navbar.Link href='#home'>
          <Text h4>Inicio</Text>
        </Navbar.Link>
        <Navbar.Link href='#works'>
          <Text h4>Proyectos</Text>
        </Navbar.Link>
        <Navbar.Link href='#about'>
          <Text h4>Sobre mi</Text>
        </Navbar.Link>
        <Navbar.Link href='#skills'>
          <Text h4>Habilidades</Text>
        </Navbar.Link>
      </Navbar.Content>
      <Spacer y={2} />
    </Navbar>
  )
}
