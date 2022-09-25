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
            ml: '5%',
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
        <Badge enableShadow disableOutline color='warning'></Badge>
        <Progress size='sm' value={100} color='warning' />
      </Row>
    </Col>
  )
}
