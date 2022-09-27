import { Container, Text, Grid, Spacer, Divider } from '@nextui-org/react'
import { Social } from '@/components'

export default function Footer() {
  return (
    <>
      <Divider y={1} />
      <Spacer y={1} />

      <Container fluid css={{ py: 20 }}>
        <Grid.Container justify='center' gap={2}>
          <Grid direction='column' xs={12} sm={6}>
            <Text h4 css={{ lineHeight: '$9xl', color: '$warningLightContrast' }}>
              Andres Parra
            </Text>
            <Text css={{ lineHeight: '$9xl' }}>Web Developer</Text>
            <Spacer y={1} />
            <Text>Gracias 🤍 por visitar mi portafolio</Text>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            css={{
              '@xsMax': {
                mt: 15,
              },
            }}>
            <Social />
          </Grid>
          <Grid justify='center' xs={12}>
            <Text>
              © 2022 | Coded with ⚡ using{' '}
              <Text b color='primary'>
                &nbsp;Reactjs&nbsp;
              </Text>
              by Andeveling
            </Text>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  )
}
