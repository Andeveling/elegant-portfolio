import { Col, Container, Row, Text } from '@nextui-org/react'

export default function Hero() {
  return (
    <Container justify='center' css={{ textAlign: 'center' }}>
      <Col>
        <Row>
          <Text
            css={{
              textGradient: '45deg, $blue600 -5%, $pink600 80%',
              lineHeight: '$9xl',
              textAlign: 'center',
              mb: -10,
            }}
            weight='bold'
            h2>
            Wellcome, I&apos;am
          </Text>
        </Row>
        <Row>
          <Text
            css={{
              textGradient: '45deg, $yellow600 -20%, $red600 100%',
              lineHeight: '$9xl',
              textAlign: 'center',
              p: 0,
              m: 0,
            }}
            weight='bold'
            size={80}
            h1
            transform='uppercase'>
            Andres Parra
          </Text>
        </Row>
        <Row>
          <Text
            css={{
              textGradient: '45deg, $blue600 -5%, $pink600 80%',
              lineHeight: '$9xl',
              textAlign: 'center',
              mb: -20,
            }}
            weight='bold'
            h2>
            Web Developer
          </Text>
        </Row>
      </Col>
    </Container>
  )
}
