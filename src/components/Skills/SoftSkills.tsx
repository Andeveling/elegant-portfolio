import { Badge, Card, Col, Text } from '@nextui-org/react'
import { dataSkills } from '@/components'

export default function SoftSkills() {
  return (
    <Card css={{ p: 10, minHeight: 460 }} variant='flat'>
      <Card.Header css={{ jc: 'center' }}>
        <Text css={{ textAlign: 'center', borderBottom: '1px solid $warning' }} h3>
          Skills / Habilidades
        </Text>
      </Card.Header>
      <Card.Body>
        <Col css={{ textAlign: 'center' }}>
          {dataSkills.map((skill) => (
            <Badge css={{ bg: '$warningLightContrast', color: '$accents0', m: 4 }} size='lg' key={skill.id}>
              {skill.title}
            </Badge>
          ))}
        </Col>
      </Card.Body>
      <Card.Footer>
        <Text css={{ fontWeight: 100 }} size='$xs' color='warning'></Text>
      </Card.Footer>
    </Card>
  )
}
