import { Row, Text } from '@nextui-org/react'

interface TitleProps {
  title: string
}

export default function Subtitle({ title }: TitleProps) {
  return (
    <Row css={{ display: 'flex', flexDirection: 'column' }} justify='center' align='center'>
      <Text size={'$3xl'} b>
        {title}
      </Text>
    </Row>
  )
}
