import { Container, Text, Grid, Spacer, Divider } from '@nextui-org/react'
import { Social } from '../Social'

export default function Footer() {
  return (
    <>
      <Divider y={1} />
      <Spacer y={1} />

      <Container fluid css={{ py: 50 }}>
        <Grid.Container>
          <Grid direction='column' xs={12} sm={6}>
            <Text h4 css={{ lineHeight: '$9xl', color: '$warningLightContrast' }}>
              Andres Parra
            </Text>
            <Text css={{ lineHeight: '$9xl' }}>Web Developer</Text>
            <Spacer y={1} />
            <Text>Tanks for visit my web site</Text>
          </Grid>
          <Grid xs={12} sm={6}>
            <Social />
          </Grid>
          <Grid justify='center' xs={12}>
            © 2022 | Coded with ⚡ using{' '}
            <Text b color='primary'>
              &nbsp;Reactjs&nbsp;
            </Text>{' '}
            by Andeveling
          </Grid>
        </Grid.Container>
      </Container>
    </>
  )
}
