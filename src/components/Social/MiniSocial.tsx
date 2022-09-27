import { GitHub, LinkedIn, Twitter } from '@mui/icons-material'
import { Button, Container, Row, Tooltip, Link } from '@nextui-org/react'
import { SocialMedia } from '@/components'

const style = {
  fontSize: 30,
  cursor: 'pointer',
}

export default function MiniSocial() {
  return (
    <Button.Group shadow size='md' color='warning' auto light>
      <Link color='warning' href={SocialMedia.GITHUB} target='_blank'>
        <Button>
          <Tooltip content={'Github'}>
            <GitHub sx={style} />
          </Tooltip>
        </Button>
      </Link>
      <Link color='warning' href={SocialMedia.TWITTER} target='_blank'>
        <Button>
          <Tooltip content={'Twitter'}>
            <Twitter sx={style} />
          </Tooltip>
        </Button>
      </Link>
      <Link color='warning' href={SocialMedia.LINKEDIN} target='_blank'>
        <Button>
          <Tooltip content={'LinkedIn'}>
            <LinkedIn sx={style} />
          </Tooltip>
        </Button>
      </Link>
    </Button.Group>
  )
}
