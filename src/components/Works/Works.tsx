import { Title, WorkCard, Projects } from '@/components'
import { Container, Divider, Grid, Row, Spacer } from '@nextui-org/react'

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
      <Spacer y={1} />

      <Grid.Container gap={1} justify='center'>
        {Projects.map((project, i) => {
          return (
            <Grid key={project.id} xs={12} sm={6} md={4}>
              <WorkCard
                id={project.id}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                imageUrl={project.imageUrl}
                imagesUrl={project.imagesUrl}
                contribution={project.contribution}
                tech={project.tech}
                deploy={project.deploy}
                repository={project.repository}
              />
            </Grid>
          )
        })}
      </Grid.Container>
    </Container>
  )
}
