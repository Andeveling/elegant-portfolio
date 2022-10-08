import { ProjectI } from '@/types'
import { Button, Card, Col, Modal, Text, useModal } from '@nextui-org/react'
import { WorkDetails } from '@/components'

export default function WorkCard({
  id,
  title,
  subtitle,
  description,
  contribution,
  imageUrl,
  imagesUrl,
  repository,
  deploy,
  tech,
}: Partial<ProjectI>) {
  const { setVisible, bindings } = useModal()
  return (
    <>
      <Card
        isHoverable
        isPressable
        onPress={() => setVisible(true)}
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
            <Text b h4>
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
        <Card.Footer css={{ bg: 'black', position: 'absolute', zIndex: 1, bottom: 0 }}>
          <Text>{description?.slice(0, 100)}...</Text>
        </Card.Footer>
      </Card>
      <Modal
        closeButton
        blur
        scroll
        preventClose
        fullScreen
        aria-labelledby='modal-title'
        aria-describedby='modal-description'
        {...bindings}>
        <Modal.Header>
          <Text b size={'xxx-large'} css={{ borderBottom: '3px solid $warningLightContrast' }}>
            {title}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <WorkDetails
            description={description}
            contribution={contribution}
            imagesUrl={imagesUrl}
            repository={repository}
            deploy={deploy}
            tech={tech}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto color='error' onClick={() => setVisible(false)} size='lg'>
            <Text b css={{ color: '$text' }}>
              close
            </Text>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
