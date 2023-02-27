import { AllCSS } from '@/models/AllCss.model'
import { Container, Divider, Grid, Text } from '@nextui-org/react'
import { useTranslation } from 'react-i18next'

const css: AllCSS = {
  header: {
    minHeight: '97vh',
    display: 'flex',
    flexDirection: 'column',
    mb: 0,
    borderBottom: '10px solid $warningLightContrast',
  },
  text_name: {
    lineHeight: '$9xl',
    textAlign: 'left',
    color: '$warningLightContrast',
    '@xsMax': {
      fontSize: 60,
      textAlign: 'center',
    },
  },
  text_job: {
    lineHeight: '$9xl',
    textAlign: 'center',
    '@xsMax': {
      fontSize: 40,
    },
  },
  text_portfolio: {
    textAlign: 'center',
    '@xsMax': {
      fontSize: 40,
    },
  },
  text_greet: {
    lineHeight: '$9xl',
    textAlign: 'center',
  },
}

export default function Header() {
  const { t } = useTranslation('header')
  return (
    <Container id='home' fluid alignContent='center' justify='center' css={css.header}>
      <Grid.Container justify='center'>
        <Grid xs={12} sm={12} justify='center'>
          <Text css={css.text_greet} weight='bold' h2>
            {t('header.greet')}&nbsp;
          </Text>
        </Grid>
        <Grid xs={12} sm={12} justify='center'>
          <Text size={100} css={css.text_name} weight='bold' h2>
            Andres Parra
          </Text>
        </Grid>
      </Grid.Container>

      <Text css={css.text_job} size={80} weight='bold' h2>
        {t('header.job')}
      </Text>
      <Divider />
      <Text css={css.text_portfolio} weight='bold' h1>
        {t('header.portfolio')}
      </Text>
    </Container>
  )
}
