import { Box, Title } from '@/components'
import { Container, Grid, Image, Spacer, Text } from '@nextui-org/react'
import { useTranslation } from 'react-i18next'

const Awards = () => {
  const { t } = useTranslation(['awards', 'about'])
  return (
    <Container
      id='awards'
      as='section'
      alignContent='center'
      css={{ px: 10, pb: 20, minHeight: '97vh', borderBottom: '10px solid $warning' }}>
      <Grid.Container>
        <Grid xs={12}>
          <Spacer y={1} />
        </Grid>
        <Grid xs={12}>
          <Title title={t('awards.title')} subtitle={t('awards.subtitle')} />
        </Grid>
        <Grid xs={12} sm={6} css={{ flexDirection: 'column', minHeight: 600 }}>
          <Text size='$lg'>{t('awards.content.p-1')}</Text>
          <Spacer y={1} />
          <Text size='$lg'>{t('awards.content.p-2')}</Text>
          <Spacer y={1} />
          <Text size='$lg'>{t('awards.content.p-3')}</Text>
          <Spacer y={1} />
        </Grid>
        <Grid xs={12} sm={6} justify='center'>
          <Box>
            <Image
              /*  css={{ alignSelf: 'flex-start' }} */
              width='98%'
              src='https://res.cloudinary.com/dg84upfsp/image/upload/v1669762426/PORTFOLIO/Screenshot_3_tl6ldq.jpg'
              alt='certificate'
            />
          </Box>
        </Grid>
      </Grid.Container>
    </Container>
  )
}
export default Awards
