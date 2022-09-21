import { Link, Navbar, Spacer, Text } from "@nextui-org/react"
import { Layout } from "./Layout"
import { Logo } from "./Logo"

export default function App() {
  const collapseItems = ["Home", "About", "Skills", "Projects"]

  return (
    <Layout>
      <Navbar variant='sticky' maxWidth='fluid'>
        <Navbar.Toggle showIn='xs' />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}>
          <Logo />
          <Text b color='inherit' hideIn='xs'>
            And
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor='warning' hideIn='xs' variant='underline'>
          <Navbar.Link href='#'>Features</Navbar.Link>
          <Spacer x={1} />
          <Navbar.Link isActive href='#'>
            Customers
          </Navbar.Link>
          <Spacer x={1} />
          <Navbar.Link href='#'>Pricing</Navbar.Link>
          <Spacer x={1} />
          <Navbar.Link href='#'>Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}></Navbar.Content>
        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor='warning'
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}>
              <Link
                color='inherit'
                css={{
                  minWidth: "100%",
                }}
                href='#'>
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  )
}
