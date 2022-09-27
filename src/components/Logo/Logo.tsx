import { Col, Link, Progress, Row, Text } from '@nextui-org/react'

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
            fontSize: 25,
            ml: 10,
          },
        }}>
        <Link href='/#home' color={'text'}>
          {name}
        </Link>
      </Text>
      <Row
        css={{
          position: 'relative',
          top: -10,
          display: 'flex',
          alignItems: 'center',
        }}>
        <Progress
          css={{
            '@xsMax': {
              size: 'xs',
            },
          }}
          shadow
          striped
          size='sm'
          value={100}
          color='warning'
        />
      </Row>
    </Col>
  )
}
