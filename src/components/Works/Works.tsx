import { Projects, Title, WorkCard } from '@/components'
import { Container, Grid, Spacer } from '@nextui-org/react'

export default function Works() {
  return (
    <Container id='works' css={{ p: 0, pl: 12, pb: 20, minHeight: '97vh', borderBottom: '10px solid $warning' }}>
      <Grid.Container gap={1} justify='center' css={{ width: '100%' }}>
        <Grid xs={12}>
          <Title title='Projects.' es='Proyectos' />
        </Grid>
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
