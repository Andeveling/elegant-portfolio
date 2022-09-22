import { Container, Row, Col, Card, Text, Button } from '@nextui-org/react'

export default function Navigation() {
  return (
    <Container>
      <Row>
        <Col>
          <Card
            css={{
              height: '50vh',
              borderRadius: 0,
              justifyContent: 'end',
              alignContent: 'end',
            }}
            borderWeight='extrabold'
            variant='flat'
            isPressable
            isHoverable>
            <Card.Body>
              <Text
                h1
                transform='full-size-kana'
                size={60}
                css={{
                  textAlign: 'right',
                  textShadow: '4px 3px 0 #7A7A7A',
                }}>
                Home
              </Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            css={{
              height: '50vh',
              borderRadius: 0,
              justifyContent: 'end',
              alignContent: 'end',
            }}
            variant='flat'
            isPressable
            isHoverable
            borderWeight='extrabold'>
            <Card.Body>
              <Text
                h1
                css={{
                  textAlign: 'left',
                }}>
                Work
              </Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            css={{
              height: '50vh',
              borderRadius: 0,
              justifyContent: 'start',
              alignContent: 'end',
            }}
            variant='flat'
            isPressable
            isHoverable
            borderWeight='extrabold'>
            <Card.Body>
              <Text
                h1
                css={{
                  textAlign: 'right',
                }}>
                About
              </Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            css={{
              height: '50vh',
              borderRadius: 0,
              justifyContent: 'start',
              alignContent: 'end',
            }}
            variant='flat'
            isPressable
            isHoverable
            borderWeight='extrabold'>
            <Card.Body>
              <Text
                h1
                css={{
                  textAlign: 'left',
                }}>
                Contact
              </Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
