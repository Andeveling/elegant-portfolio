import { Card, Divider, Progress, Text } from '@nextui-org/react'

export default function SkillsList() {
  return (
    <Card css={{ p: 10 }}>
      <Card.Body>
        <Text css={{ textAlign: 'center' }} h3>
          Frontend
        </Text>
        <Text h4>React JS / Redux Toolkit / RTK Query</Text>
        <Progress size='sm' value={50} striped color='warning' />
        <Divider y={1} />
        <Text h4>Material UI / Next UI</Text>
        <Progress size='sm' value={40} striped color='warning' />
        <Divider y={1} />
        <Text css={{ textAlign: 'center' }} h3>
          Backend
        </Text>
        <Text h4>Express JS / Node JS / Sequelize</Text>
        <Progress size='sm' value={35} striped color='success' />
        <Divider y={1} />
        <Text h4>Postgres SQL</Text>
        <Progress size='sm' value={20} striped />
      </Card.Body>
      <Card.Footer>
        <Text css={{ fontWeight: 100 }} size='$xs' color='warning'>
          *The progress bars that you see do not correspond to the knowledge that could be obtained from said
          technology, but to the time that I have dedicated to learning and practicing it.{' '}
        </Text>
      </Card.Footer>
    </Card>
  )
}
