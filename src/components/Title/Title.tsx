import { AllCSS } from '@/models/AllCss.model'
import { Col, Text } from '@nextui-org/react'

interface TitleProps {
  title: string
  subtitle: string
}

const css: AllCSS = {
  col: {
    ml: 20,
    pt: 70,
    '@xsMax': {
      pt: 65,
    },
  },
  text_title: {
    lineHeight: '$8xl',
    '@xsMax': {
      fontSize: 55,
      ml: '20%',
    },
  },
  text_subtitle: {
    p: 0,
    fontWeight: 100,
    position: 'relative',
    top: -10,
    '@xsMax': {
      ml: '20%',
    },
  },
}

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <Col css={css.col}>
      <Text size={80} h1 css={css.text_title}>
        {title}
      </Text>
      <Text size={30} css={css.text_subtitle}>
        / {subtitle}
      </Text>
    </Col>
  )
}
