import { Container, Text, Grid, Spacer } from '@nextui-org/react'
import { Social } from '../Social'

export default function Footer() {
  return (
    <>
      <Spacer y={2} />
      <Container fluid css={{ bg: '$accents0', py: 50 }}>
        <Grid.Container>
          <Grid direction='column' xs={12} sm={6}>
            <Text h4>Andres Parra</Text>
            <Text>Web Developer</Text>
            <Spacer y={1} />
            <Text>Tanks for visit my web site</Text>
          </Grid>
          <Grid xs={12} sm={6}>
            <Social />
          </Grid>
          <Grid justify='center' xs={12}>
            © 2022 | Coded with ⚡ using Reactjs by Andeveling
          </Grid>
        </Grid.Container>
      </Container>
    </>
  )
}
