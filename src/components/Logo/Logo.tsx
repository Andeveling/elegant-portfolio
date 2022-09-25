import { Progress, Text, Col, Row, Badge } from '@nextui-org/react'

interface LogoProps {
  name: string
}
export default function Logo({ name }: LogoProps) {
  return (
    <Col>
      <Text
        h2
        css={{
          '@xsMax': {
            fontSize: 35,
          },
        }}>
        {name}
      </Text>
      <Row
        css={{
          position: 'relative',
          top: -10,
          display: 'flex',
          alignItems: 'center',
        }}>
        <Progress shadow striped size='sm' value={100} color='warning' />
      </Row>
    </Col>
  )
}
