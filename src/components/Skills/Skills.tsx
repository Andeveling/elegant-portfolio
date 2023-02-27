import { HeaderSoftSkills, HeaderTechSkills, SkillsList, SoftSkills, Title } from '@/components'
import { AllCSS } from '@/models/AllCss.model'
import { Container, Grid, Spacer } from '@nextui-org/react'
import { useTranslation } from 'react-i18next'

const css: AllCSS = {
  container: { px: 10, pb: 20, minHeight: '97vh', borderBottom: '10px solid $warning' },
}

export default function Skills() {
  const { t } = useTranslation('skills')
  return (
    <Container id='skills' alignContent='center' as='section' css={css.container}>
      <Spacer y={1} />
      <Grid.Container gap={1} justify='center' css={{ width: '100%' }}>
        <Grid xs={12}>
          <Title title={t('skills.title')} subtitle={t('skills.subtitle')} />
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
