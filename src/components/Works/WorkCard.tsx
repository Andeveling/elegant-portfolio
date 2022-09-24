import { Card, Col, Row, Text } from '@nextui-org/react'

interface ImagePropsI {
  url: string
}

export default function WorkCard({ url }: ImagePropsI) {
  return (
    <Card
      isHoverable
      isPressable
      css={{
        h: '360px',
        opacity: 0.7,
        transition: 100,
        '&:hover': {
          opacity: 1,
        },
      }}>
      <Card.Header css={{ bg: 'black', position: 'absolute', zIndex: 1, top: 0, opacity: 0.8 }}>
        <Col>
          <Text transform='uppercase' b>
            Pokemon App
          </Text>
          <Text h4 color='white'>
            Información de Pokemons a tu mano
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0, h: '80%' }}>
        <Card.Image src={url} objectFit='cover' width={'100%'} height={300} alt={'img'}></Card.Image>
      </Card.Body>
      <Card.Footer>
        <Col>
          <Row wrap='wrap' justify='space-between' align='center'></Row>
          <Row wrap='wrap' justify='space-between' align='center'>
            <Text>My first full stack web project using PERN stack, at the bootcamp I attended</Text>
          </Row>
        </Col>
      </Card.Footer>
    </Card>
  )
}
