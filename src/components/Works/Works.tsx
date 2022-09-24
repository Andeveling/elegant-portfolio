import { Container, Grid, Switch, Text, Spacer } from '@nextui-org/react'
import pokemonPi from '@/assets/project01/pokemon.png'
import { Box } from '../Layout'
import WorkCard from './WorkCard'

export default function Works() {
  return (
    <Container
      id='works'
      fluid
      alignContent='center'
      css={{ boxSizing: 'border-box', p: 0, borderBottom: '10px solid $warning', pb: 20 }}>
      <Box>
        <Text size={80} h1>
          Projects / Snacks
        </Text>
        <Switch bordered size='xl' color='warning' onChange={(e) => console.log(e.target.checked)} />
        <Spacer y={1} />
      </Box>
      <Grid.Container gap={1} justify='center'>
        <Grid xs={9} sm={6} md={4}>
          <WorkCard url={pokemonPi} />
        </Grid>
        <Grid xs={9} sm={6} md={4}>
          <WorkCard url={pokemonPi} />
        </Grid>
        <Grid xs={9} sm={6} md={4}>
          <WorkCard url={pokemonPi} />
        </Grid>
        <Grid xs={9} sm={6} md={4}>
          <WorkCard url={pokemonPi} />
        </Grid>
        <Grid xs={9} sm={6} md={4}>
          <WorkCard url={pokemonPi} />
        </Grid>
        <Grid xs={9} sm={6} md={4}>
          <WorkCard url={pokemonPi} />
        </Grid>
      </Grid.Container>
    </Container>
  )
}
