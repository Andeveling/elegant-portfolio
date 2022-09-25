import { Row, Text } from '@nextui-org/react'

interface TitleProps {
  subtitle: string
  es: string
}

export default function Subtitle({ subtitle, es }: TitleProps) {
  return (
    <Row justify='center' align='center'>
      <Text h2>{subtitle}</Text>
      <Text> / {es}</Text>
    </Row>
  )
}
