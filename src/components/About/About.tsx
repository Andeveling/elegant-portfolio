import { Photo, Social, Title } from '@/components'
import { AllCSS } from '@/models/AllCss.model'
import { Col, Container, Grid, Spacer, Text } from '@nextui-org/react'
import { useTranslation } from 'react-i18next'

export default function About() {
  const css: AllCSS = {
    container: { px: 10, pb: 10, minHeight: '97vh', borderBottom: '10px solid $warning' },
  }
  const { t } = useTranslation('about')
  return (
    <Container id='about' as='section' alignContent='center' css={css.container}>
      <Grid.Container>
        <Grid xs={12}>
          <Spacer y={1} />
        </Grid>
        <Grid xs={12}>
          <Title title={t('about.title')} subtitle={t('about.subtitle')} />
        </Grid>
        <Grid xs={12} sm={6} css={{ flexDirection: 'column' }}>
          <Text
            size='$lg'
            dangerouslySetInnerHTML={{
              __html: t('about.content-1'),
            }}
          />
          <Spacer y={1} />
          <Text
            size='$lg'
            dangerouslySetInnerHTML={{
              __html: t('about.content-2'),
            }}
          />
          <Spacer y={1} />
          <Text size='$lg' dangerouslySetInnerHTML={{ __html: t('about.content-3') }} />
          <Spacer y={1} />
          <Text
            size='$lg'
            dangerouslySetInnerHTML={{
              __html: t('about.content-4'),
            }}
          />
          <Spacer y={1} />
          <Col css={{ textAlign: 'center' }}>
            <Text b size='$xl' css={{ mb: 10 }}>
              {t('about.social')}
            </Text>
            <Spacer y={1} />
            <Social />
            <Spacer y={1} />
          </Col>
        </Grid>
        <Grid xs={12} sm={6} justify='center'>
          <Photo />
        </Grid>
      </Grid.Container>
    </Container>
  )
}
