import { Container, Divider, Grid, Text } from '@nextui-org/react'

export default function Header() {
  return (
    <Container
      id='home'
      fluid
      alignContent='center'
      justify='center'
      css={{
        minHeight: '97vh',
        display: 'flex',
        flexDirection: 'column',
        mb: 0,
        borderBottom: '10px solid $warningLightContrast',
      }}>
      <Grid.Container justify='center'>
        <Grid xs={12} sm={12} justify='center'>
          <Text
            css={{
              lineHeight: '$9xl',
              textAlign: 'center',
            }}
            weight='bold'
            h2>
            Hola, soy&nbsp;
          </Text>
        </Grid>
        <Grid xs={12} sm={12} justify='center'>
          <Text
            size={100}
            css={{
              lineHeight: '$9xl',
              textAlign: 'left',
              color: '$warningLightContrast',
              '@xsMax': {
                fontSize: 60,
                textAlign: 'center',
              },
            }}
            weight='bold'
            h2>
            Andres Parra
          </Text>
        </Grid>
      </Grid.Container>

      <Text
        css={{
          lineHeight: '$9xl',
          textAlign: 'center',
          '@xsMax': {
            fontSize: 40,
          },
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
          '@xsMax': {
            fontSize: 40,
          },
        }}
        weight='bold'
        h1>
        Mi Portafolio
      </Text>
    </Container>
  )
}
