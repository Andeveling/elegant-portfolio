import { Button, Navbar } from '@nextui-org/react'
import { Layout } from '../Layout/Layout'

export default function Nav() {
  const collapseItems = ['Home', 'Work', 'About', 'Contact']

  return (
    <Layout>
      <Navbar isCompact variant='floating' maxWidth='xl'>
        <Navbar.Brand>
          <Navbar.Toggle aria-label='toggle navigation' showIn='xs' />
        </Navbar.Brand>
        <Navbar.Content activeColor='warning' hideIn='xs' variant='default'>
          <Navbar.Link href='#'>Features</Navbar.Link>
          <Navbar.Link isActive href='#'>
            Customers
          </Navbar.Link>
          <Navbar.Link href='#'>Pricing</Navbar.Link>
          <Navbar.Link href='#'>Company</Navbar.Link>
        </Navbar.Content>
        <Button.Group color='secondary' light>
          <Navbar.Collapse>
            {collapseItems.map((item, index) => (
              <Navbar.CollapseItem key={index}>
                <Button>{item}</Button>
              </Navbar.CollapseItem>
            ))}
          </Navbar.Collapse>
        </Button.Group>
        <Navbar.Content>
          <Button color='gradient' bordered>
            Let&apos;s Conect
          </Button>
        </Navbar.Content>
      </Navbar>
    </Layout>
  )
}
