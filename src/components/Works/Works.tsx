import { Title } from '@/components'
import { Container, Divider, Grid, Row, Spacer } from '@nextui-org/react'
import WorkCard from './WorkCard'
import { Projects } from './data'

export default function Works() {
  return (
    <Container
      alignContent='center'
      css={{ boxSizing: 'border-box', p: 0, borderBottom: '10px solid $warning', pb: 20 }}>
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
              <WorkCard
                id={project.id}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            </Grid>
          )
        })}
      </Grid.Container>
    </Container>
  )
}
