import { Button, Card, Container, Row, Text } from '@nextui-org/react'

function App() {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Header>
            <Text h2>Hola Mundo</Text>
          </Card.Header>
          <Row justify='center' align='center'>
            <Text h6 size={15} color='white' css={{ m: 0 }}>
              NextUI gives you the best developer experience with all the features you need for building beautiful and
              modern websites and applications.
            </Text>
          </Row>
          <Row justify='center' align='center'>
            <Text h6 size={15} color='white' css={{ m: 0 }}>
              NextUI gives you the best developer experience with all the features you need for building beautiful and
              modern websites and applications.
            </Text>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Button.Group size='xl'>
            <Button>Boton</Button>
            <Button>Boton</Button>
            <Button>Boton</Button>
          </Button.Group>
          <Text css={{ background: '$myColor' }}>Un texto algo raro</Text>
        </Card.Footer>
      </Card>
    </Container>
  )
}

export default App
