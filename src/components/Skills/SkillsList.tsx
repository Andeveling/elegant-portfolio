import { Card, Divider, Progress, Text } from '@nextui-org/react'

export default function SkillsList() {
  return (
    <Card css={{ p: 10, minHeight: 460 }} variant='flat'>
      <Card.Header css={{ jc: 'center' }}>
        <Text css={{ textAlign: 'center', borderBottom: '1px solid $warning' }} h3>
          Frontend / Backend
        </Text>
      </Card.Header>
      <Card.Body>
        <Text h4>React JS / Redux Toolkit / RTK Query</Text>
        <Progress size='sm' value={50} striped color='warning' />
        <Divider y={1} />
        <Text h4>Material UI / Next UI</Text>
        <Progress size='sm' value={25} striped color='warning' />
        <Divider y={1} />
        <Text h4>Express JS / Node JS / Sequelize</Text>
        <Progress size='sm' value={15} striped color='success' />
        <Divider y={1} />
        <Text h4>Postgres SQL</Text>
        <Progress size='sm' value={10} striped />
      </Card.Body>
      <Card.Footer>
        <Text css={{ fontWeight: 300 }} color='warning'>
          *Las barras de progreso corresponden al tiempo que he dedicado a cada tecnología y no a un nivel de
          conocimiento.
        </Text>
      </Card.Footer>
    </Card>
  )
}
