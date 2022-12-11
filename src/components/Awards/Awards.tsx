import { Box, Social, Title } from '@/components'
import { Col, Container, Grid, Image, Spacer, Text } from '@nextui-org/react'

const Awards = () => {
  return (
    <Container
      id='awards'
      alignContent='center'
      css={{ px: 10, pb: 20, minHeight: '97vh', borderBottom: '10px solid $warning' }}>
      <Grid.Container>
        <Grid xs={12}>
          <Spacer y={1} />
        </Grid>
        <Grid xs={12}>
          <Title title='Awards' es='Premios' />
        </Grid>
        <Grid xs={12} sm={6} css={{ flexDirection: 'column' }}>
          <Text size='$lg'>
            Este reconocimiento , fue otorgado por el staff de{' '}
            <Text b color='error'>
              Gentleman Programing
            </Text>{' '}
            por la participation activa en el Hackathon 2022 como un reconocimiento al esfuerzo.
          </Text>
          <Spacer y={1} />
          <Text size='$lg'>
            Después de empezar con un equipo de 6 integrantes repartidos en dos grupos con el fin de desarrollar una
            aplicación para el Hackathon de{' '}
            <Text b color='error'>
              Gentleman Programing
            </Text>{' '}
            , basada en búsquedas laborales, nos repartimos las tareas dividas en frontend y backend donde debíamos
            cumplir con distintos requisitos en un máximo de 42 horas, en un inicio empezamos todos muy bien, motivados
            y trabajando codo a codo, pero al pasar de las horas algunos integrantes abandonaron, otros se
            desmoralizaron y poco a poco se fue desacomodando el equipo y al último día no asistieron, también fue muy
            desmotivador para mí, pero si había asumido el compromiso de participar sentía que tenía que seguir adelante
            respetando ese compromiso, al final decidí centrarme en las características principales que solicita el
            evento y saque una app que cumplía con los requerimientos mínimos, utilizando parte de código que mis
            compañeros de trabajo dejaron hecho y adaptando otros a mi manera.
          </Text>
          <Spacer y={1} />

          <Text size='$lg'>
            Agradecimientos especiales al staff de{' '}
            <Text b color='error'>
              Gentleman Programing
            </Text>{' '}
            y al señor{' '}
            <Text b color='error'>
              Alan Buscaglia
            </Text>{' '}
            por la oportunidad.
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
          <Box>
            <Image
              css={{ alignSelf: 'flex-start' }}
              width='98%'
              src='https://res.cloudinary.com/dg84upfsp/image/upload/v1669762426/PORTFOLIO/Screenshot_3_tl6ldq.jpg'
              alt='certificate'
            />
          </Box>
        </Grid>
      </Grid.Container>
    </Container>
  )
}
export default Awards
