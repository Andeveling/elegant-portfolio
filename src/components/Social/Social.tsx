import { GitHub, LinkedIn, Twitter } from '@mui/icons-material'
import { Button, Container, Row, Tooltip } from '@nextui-org/react'

export const style = {
  fontSize: 50,
  cursor: 'pointer',
}

export default function Social() {
  return (
    <Container>
      {/*  <Row justify='center' align='center'>
        <GitHub sx={style} />
        <Spacer x={2} />
        <Twitter sx={style} />
        <Spacer x={2} />
        <LinkedIn sx={style} />
      </Row> */}
      <Row justify='center' align='center'>
        <Button.Group size='xl' color='warning' auto light>
          <Button>
            <Tooltip content={'Github'}>
              <GitHub sx={style} />
            </Tooltip>
          </Button>

          <Button>
            <Tooltip content={'Twitter'}>
              <Twitter sx={style} />
            </Tooltip>
          </Button>
          <Button>
            <Tooltip content={'LinkedIn'}>
              <LinkedIn sx={style} />
            </Tooltip>
          </Button>
        </Button.Group>
      </Row>
    </Container>
  )
}
