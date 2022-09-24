import { Container, Divider, Text, Row } from '@nextui-org/react'

export default function Header() {
  return (
    <Container
      id='home'
      fluid
      alignContent='center'
      justify='center'
      css={{
        height: '100vh',
        pt: '$10',
        pb: '$10',
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '10px solid $warningLightContrast',
      }}>
      <Row justify='center'>
        <Text
          css={{
            lineHeight: '$9xl',
            textAlign: 'center',
          }}
          weight='bold'
          h2>
          Hola, soy&nbsp;
        </Text>
        <Text
          css={{
            lineHeight: '$9xl',
            textAlign: 'center',
            color: '$warningLightContrast',
          }}
          weight='bold'
          h2>
          Andres Parra
        </Text>
      </Row>

      <Text
        css={{
          lineHeight: '$9xl',
          textAlign: 'center',
        }}
        size={80}
        weight='bold'
        h2>
        Desarrollador Web
      </Text>
      <Divider />
      <Text
        css={{
          textAlign: 'center',
        }}
        weight='bold'
        h1>
        Mi Portafolio
      </Text>
    </Container>
  )
}
