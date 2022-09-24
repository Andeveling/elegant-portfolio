import { Box, Social } from '@/components'
import { Container, Grid, Spacer, Text } from '@nextui-org/react'
import Photo from './Photo'

export default function About() {
  return (
    <Container
      id='about'
      fluid
      alignContent='center'
      css={{ boxSizing: 'border-box', mt: 100, p: 0, borderBottom: '10px solid $warning', height: '100vh' }}>
      <Box>
        <Text size={80} h1>
          About.
        </Text>
        <Grid.Container gap={2}>
          <Grid xs={12} sm={6} css={{ flexDirection: 'column' }}>
            <Text size='$lg'>
              Hello, I&prime;m a <strong>Web developer</strong> based in <strong>Buga</strong>, Colombia.
            </Text>
            <Text size='$lg'>
              I am Fabián Andrés Parra Sánchez, a fullstack web developer who learns something new every day, after
              years of having programming as a hobby, I wanted to change my life by joining a Bootcamp where I have
              learned about web development and I am putting everything into practice.
            </Text>
            <Text size='$lg'>
              Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh sed
              pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc
              consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra tellus in hac habitasse
              platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque gravida in.
            </Text>
            <Spacer y={1} />
            <Social />
          </Grid>
          <Grid xs={12} sm={6} justify='center'>
            <Photo />
          </Grid>
        </Grid.Container>
      </Box>
    </Container>
  )
}
