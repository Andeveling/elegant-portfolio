import andres from '@/assets/andres.jpg'
import { Card, Container } from '@nextui-org/react'

export default function Photo() {
  return (
    <Card css={{ mw: 375 }}>
      <Card.Image src={andres} alt='photo'></Card.Image>
    </Card>
  )
}
