import { Container, Grid, Text } from '@nextui-org/react'
import { Box, Layout, WorkDetailButtons, WorkBrowserView } from '@/components'
import { ProjectI } from '@/types'

export default function WorkDetails({
  description,
  contribution,
  imagesUrl,
  deploy,
  repository,
  tech,
}: Partial<ProjectI>) {
  return (
    <Layout>
      <Container
        fluid
        alignContent='center'
        css={{
          boxSizing: 'border-box',
          borderBottom: '10px solid $warning',
          minHeight: '95vh',
          p: 0,
        }}>
        <Box>
          <Grid.Container justify='center' gap={1}>
            <Grid xs={12} css={{ justifyContent: 'center' }}>
              <Text size='$xl' css={{ maxW: 1000 }}>
                {description}
              </Text>
            </Grid>
            <Grid xs={12} css={{ justifyContent: 'center' }}>
              <Text size='$xl' css={{ maxW: 1000 }}>
                {contribution}
              </Text>
            </Grid>
          </Grid.Container>
          <WorkDetailButtons deploy={deploy} repository={repository} tech={tech} />
          <Grid.Container gap={2} justify='center'>
            {imagesUrl?.map((img) => (
              <Grid key={img.id} xs={12} sm={6}>
                <WorkBrowserView title={img.title} url={img.url} />
              </Grid>
            ))}
          </Grid.Container>
        </Box>
      </Container>
    </Layout>
  )
}
