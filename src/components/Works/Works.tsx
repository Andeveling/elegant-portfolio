import { Title } from '@/components'
import { PublicRoutes } from '@/routes'
import { Container, Divider, Grid, Row, Spacer } from '@nextui-org/react'
import { Projects } from './data'
import WorkCard from './WorkCard'
import { Link } from 'react-router-dom'

export default function Works() {
  return (
    <Container
      alignContent='center'
      css={{ boxSizing: 'border-box', p: 0, borderBottom: '10px solid $warning', pb: 20, minHeight: '97vh' }}>
      <Spacer y={1} />
      <Row>
        <Title title='Projects.' es='Proyectos' />
      </Row>
      <Divider y={1} />
      {/*   <Switch bordered size='xl' color='warning' onChange={(e) => console.log(e.target.checked)} /> */}
      <Spacer y={1} />

      <Grid.Container gap={1}>
        {Projects.map((project, i) => {
          return (
            <Grid key={project.id} xs={12} sm={6} md={4}>
              <Link to={`${PublicRoutes.WORK}/${project.id}`}>
                <WorkCard
                  id={project.id}
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  tech={project.tech}
                />
              </Link>
            </Grid>
          )
        })}
      </Grid.Container>
    </Container>
  )
}
