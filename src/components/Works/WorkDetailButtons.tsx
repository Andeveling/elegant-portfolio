import { Badge, Button, Col, Grid, Link, Row, Text } from '@nextui-org/react'
import { ProjectI } from '@/types'

export default function WorkDetailButtons({ repository, deploy, tech }: Partial<ProjectI>) {
  return (
    <Grid.Container justify='center' gap={2}>
      <Grid xs={6} sm={6} justify='center'>
        {repository ? (
          <Link color='warning' href={repository} target='_blank'>
            <Button size='lg' color='warning' bordered css={{ minWidth: 160, mr: 5 }}>
              Repository
            </Button>
          </Link>
        ) : (
          <Button disabled size='lg' bordered css={{ minWidth: 160, ml: 5 }}>
            Repository
          </Button>
        )}
        {deploy ? (
          <Link color='warning' href={deploy} target='_blank'>
            <Button size='lg' color='warning' bordered css={{ minWidth: 160, ml: 5 }}>
              Deploy
            </Button>
          </Link>
        ) : (
          <Button disabled size='lg' bordered css={{ minWidth: 160, ml: 5 }}>
            Deploy
          </Button>
        )}
      </Grid>
      <Grid xs={12}>
        <Col>
          <Text h2 css={{ textAlign: 'center' }}>
            Tech Stack
          </Text>
          <Row wrap='wrap' justify='center' align='center'>
            {tech?.map((t, i) => (
              <Badge key={i} css={{ bg: '$warningLightContrast', color: '$accents0', m: 1 }}>
                {t}
              </Badge>
            ))}
          </Row>
        </Col>
      </Grid>
    </Grid.Container>
  )
}
