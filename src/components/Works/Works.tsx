import { Box, Title, WorkCard } from '@/components'
import type { AllCSS } from '@/models/AllCss.model'
import type { ProjectI } from '@/types'
import { Container, Grid } from '@nextui-org/react'
import { useTranslation } from 'react-i18next'

const css: AllCSS = {
  container: { minHeight: '97vh', borderBottom: '10px solid $warning' },
  box: {},
  grid_container: { width: '100%' },
}

export default function Works() {
  const { t } = useTranslation('projects')
  const projects: ProjectI[] = t('projects.list', { returnObjects: true })
  return (
    <Container fluid css={css.container}>
      <Box as='section' id='works' css={css.box}>
        <Grid.Container gap={1} justify='center' css={css.grid_container}>
          <Grid xs={12}>
            <Title title={t('projects.title')} subtitle={t('projects.subtitle')} />
          </Grid>
          {projects.map((project, i) => {
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
      </Box>
    </Container>
  )
}
