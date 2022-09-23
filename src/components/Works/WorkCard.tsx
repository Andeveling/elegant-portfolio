import { Card, Col, Row, Text } from '@nextui-org/react'

export default function WorkCard() {
  return (
    <Card
      isHoverable
      isPressable
      css={{
        h: '360px',
        opacity: 0.8,
        transition: 0.3,
        borderRadius: 0,
        '&:hover': {
          opacity: 1,
        },
      }}>
      <Card.Body css={{ p: 0, h: '80%' }}>
        <Card.Image
          src={'https://i.picsum.photos/id/559/1920/1080.jpg?hmac=DjL6SjYk1I3HF_3F-VtSIWA1p-peYywclMuT1o58y2U'}
          objectFit='cover'
          width={'100%'}
          height={300}
          alt={'img'}></Card.Image>
      </Card.Body>
      <Card.Footer>
        <Col>
          <Row wrap='wrap' justify='space-between' align='center'>
            <Text transform='uppercase' b>
              Pokemon Api
            </Text>
          </Row>
          <Row wrap='wrap' justify='space-between' align='center'>
            <Text>My first full stack web project using PERN stack, at the bootcamp I attended</Text>
          </Row>
        </Col>
      </Card.Footer>
    </Card>
  )
}
