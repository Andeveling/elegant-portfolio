import { SocialMedia } from '@/components'
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material'
import { Button, Link, Tooltip } from '@nextui-org/react'

const style = {
  fontSize: 26,
  cursor: 'pointer',
}

export default function MiniSocial() {
  return (
    <Button.Group shadow size='xs' color='warning' auto light css={{ ml: 14 }}>
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
