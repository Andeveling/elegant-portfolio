import { HeaderSoftSkills, HeaderTechSkills, SkillsList, SoftSkills, Title } from '@/components'
import { Container, Grid, Spacer } from '@nextui-org/react'

export default function Skills() {
  return (
    <Container
      fluid
      id='skills'
      alignContent='center'
      css={{ p: 0, pl: 12, pb: 20, minHeight: '97vh', borderBottom: '10px solid $warning' }}>
      <Spacer y={1} />
      <Grid.Container gap={1} justify='center' css={{ width: '100%' }}>
        <Grid xs={12}>
          <Title title='Skills.' es='Habilidades' />
        </Grid>
        <Grid xs={12} sm={6} css={{ flexDirection: 'column' }}>
          <HeaderTechSkills />
          <SkillsList />
        </Grid>
        <Grid xs={12} sm={6} css={{ flexDirection: 'column' }}>
          <HeaderSoftSkills />
          <SoftSkills />
        </Grid>
      </Grid.Container>
    </Container>
  )
}
