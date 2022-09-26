import { Card } from '@nextui-org/react'

export default function Photo() {
  return (
    <Card css={{ mw: 375 }}>
      <Card.Image
        src={'https://res.cloudinary.com/dg84upfsp/image/upload/v1664231394/PORTFOLIO/andres_vbaip0.jpg'}
        alt='photo'></Card.Image>
    </Card>
  )
}
