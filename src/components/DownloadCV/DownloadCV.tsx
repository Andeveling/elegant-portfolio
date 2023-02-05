import { Button } from '@nextui-org/react'

export default function DownloadCV() {
  return (
    <Button
      size='sm'
      shadow
      color='gradient'
      bordered
      rounded
      css={{
        position: 'fixed',
        top: 95,
        right: 10,
      }}>
      Descargar CV
    </Button>
  )
}
