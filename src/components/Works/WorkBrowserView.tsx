import { ImagesCollectionI } from '@/types'
import { Badge, Card, Text } from '@nextui-org/react'

export default function WorkBrowserView({ title, url }: Partial<ImagesCollectionI>) {
  return (
    <Card variant='bordered' css={{ w: '100%', mh: '380px', p: 0 }}>
      <Card.Header css={{ zIndex: 1, top: 0, bg: '$accents1' }}>
        <Badge color='error' />
        <Badge color='warning' />
        <Badge color='success' />
      </Card.Header>
      <Card.Body css={{ width: '100%', p: 0 }}>
        <Card.Image src={url || ''} alt='img' objectFit='cover' width='100%' />
      </Card.Body>
      <Card.Footer css={{ zIndex: 1, bottom: 0, bg: '$accents1', h: 40 }}>
        <Text b>{title}</Text>
      </Card.Footer>
    </Card>
  )
}
