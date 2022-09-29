import { Box, Social, Title, Photo } from '@/components'
import { Col, Container, Divider, Grid, Row, Spacer, Text } from '@nextui-org/react'

export default function About() {
  return (
    <Container
      fluid
      alignContent='center'
      css={{ boxSizing: 'border-box', borderBottom: '10px solid $warning', minHeight: '95vh', p: 0 }}>
      <Spacer y={1} />
      <Box>
        <Row justify='flex-start'>
          <Title title='About.' es='Sobre mí' />
        </Row>
        <Divider y={1} />
        <Grid.Container gap={2}>
          <Grid xs={12} sm={6} css={{ flexDirection: 'column' }}>
            <Text size='$lg'>
              Hola, soy un{' '}
              <Text b color='warning'>
                Web developer
              </Text>
              , resido en <strong>Buga</strong>, Colombia.
            </Text>
            <Spacer y={1} />
            <Text size='$lg'>
              Yo soy{' '}
              <Text b color='warning'>
                Fabián Andrés Parra Sánchez
              </Text>
              , inicié mi aprendizaje tech en plataformas digitales, hace un año y complemente al unirme a un bootcamp
              en junio de este año 2022, es una comunidad increíble que cuenta con gente dispuesta a apoyar y encontré
              más personas con la misma pasión por esta labor.
            </Text>
            <Spacer y={1} />
            <Text size='$lg'>
              Desde hace muchos años la programación fue uno de mis hobbies, siempre trabaje en pequeños proyectos en
              C#, inspirado por el mercado indie de videojuegos, hasta que decidí iniciar mi camino como web developer
              en un bootcamp y llevar este hobbie al siguiente nivel, ahora estoy haciendo de este lindo mundo mi nuevo
              camino profesional, con el apoyo incondicional de mi{' '}
              <Text b css={{ color: '$pink700' }}>
                familia
              </Text>
              , en especial de mi esposa.
            </Text>
            <Spacer y={1} />
            <Col css={{ textAlign: 'center' }}>
              <Text b h5>
                Visita mis redes:
              </Text>
              <Social />
            </Col>
          </Grid>
          <Grid xs={12} sm={6} justify='center'>
            <Photo />
          </Grid>
        </Grid.Container>
      </Box>
    </Container>
  )
}
