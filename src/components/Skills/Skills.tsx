import { Box, Title, HeaderTechSkills, SkillsList, HeaderSoftSkills, SoftSkills } from '@/components'
import { Container, Divider, Grid, Row, Spacer } from '@nextui-org/react'

export default function Skills() {
  return (
    <Container
      fluid
      alignContent='center'
      css={{ boxSizing: 'border-box', borderBottom: '10px solid $warning', minHeight: '95vh', p: 0 }}>
      <Spacer y={1} />
      <Box>
        <Row>
          <Title title='Skills.' es='Habilidades' />
        </Row>
        <Divider y={1} />
        <Grid.Container gap={4}>
          <Grid xs={12} sm={6} css={{ flexDirection: 'column' }}>
            <HeaderTechSkills />
            <SkillsList />
          </Grid>
          <Grid xs={12} sm={6} css={{ flexDirection: 'column' }}>
            <HeaderSoftSkills />
            <SoftSkills />
          </Grid>
        </Grid.Container>
      </Box>
    </Container>
  )
}
