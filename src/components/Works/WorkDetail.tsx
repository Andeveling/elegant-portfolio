import { Box, Layout, Projects } from '@/components'
import { Col, Container, Grid, Row, Spacer, Text } from '@nextui-org/react'
import { useParams } from 'react-router-dom'

export default function WorkDetail() {
  const params = useParams()
  const project = Projects.find((projects) => projects.id === params.id)

  return (
    <Layout>
      <Container
        fluid
        alignContent='center'
        css={{
          bg: '$accents0',
          boxSizing: 'border-box',
          borderBottom: '10px solid $warning',
          minHeight: '95vh',
          p: 0,
        }}>
        <Box>
          <Col>
            <Spacer y={5} />
            <Row justify='center' align='center'>
              <Text b size={'xxx-large'} css={{ borderBottom: '3px solid $warningLightContrast' }}>
                {project?.title}
              </Text>
            </Row>
            <Row>
              <Text size='$xl'>{project?.description}</Text>
            </Row>
          </Col>
          <Grid.Container>
            <Grid></Grid>
          </Grid.Container>
          <Grid.Container>
            <Grid xs={6} sm={6}>
              Repositorio:
            </Grid>
            <Grid xs={6} sm={6}>
              Sitio:
            </Grid>
            <Grid xs={6} sm={6}>
              Mi Rol:
            </Grid>
            <Grid xs={6} sm={6}>
              Contribuciones:
            </Grid>
          </Grid.Container>
        </Box>
      </Container>
    </Layout>
  )
}
