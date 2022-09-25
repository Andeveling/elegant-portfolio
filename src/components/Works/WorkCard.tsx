import { Card, Col, Row, Text } from '@nextui-org/react'
import { ProjectI } from '@/types'

export default function WorkCard({
  id,
  title,
  subtitle,
  description,
  imageUrl,
  repository,
  deploy,
  tech,
}: Partial<ProjectI>) {
  return (
    <Card
      isHoverable
      isPressable
      variant='flat'
      css={{
        h: '360px',
        opacity: 0.7,
        transition: 100,
        '&:hover': {
          opacity: 1,
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px',
        },
      }}>
      <Card.Header css={{ bg: 'black', position: 'absolute', zIndex: 1, top: 0, opacity: 0.8 }}>
        <Col>
          <Text transform='uppercase' b h4>
            {title}
          </Text>
          <Text h5 color='white'>
            {subtitle}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0, h: '80%' }}>
        <Card.Image src={imageUrl || ''} objectFit='cover' width={'100%'} height={300} alt={'img'} />
      </Card.Body>
      <Card.Footer>
        <Col>
          <Row wrap='wrap' justify='space-between' align='center'></Row>
          <Row wrap='wrap' justify='space-between' align='center'>
            <Text>{description?.slice(0, 120)}...</Text>
          </Row>
        </Col>
      </Card.Footer>
    </Card>
  )
}
