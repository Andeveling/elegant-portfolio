import { Col, Text } from '@nextui-org/react'

interface TitleProps {
  title: string
  es: string
}

export default function Title({ title, es }: TitleProps) {
  return (
    <Col
      css={{
        ml: 20,
        pt: 55,
        '@xsMax': {
          pt: 48,
        },
      }}>
      <Text
        size={80}
        h1
        css={{
          lineHeight: '$9xl',
          '@xsMax': {
            fontSize: 60,
            ml: '20%',
          },
        }}>
        {title}
      </Text>
      <Text
        size={30}
        css={{
          p: 0,
          fontWeight: 100,
          position: 'relative',
          top: -20,
          '@xsMax': {
            ml: '20%',
          },
        }}>
        / {es}
      </Text>
    </Col>
  )
}
