import { Badge, Card, Col, Text } from '@nextui-org/react'
import { useTranslation } from 'react-i18next'
import { SkillsI } from '@/types'
import { Fragment } from 'react'

export default function SoftSkills() {
  const { t } = useTranslation('skills')
  const skills: SkillsI[] = t('skills.soft-skills.list', { returnObjects: true })
  return (
    <Card css={{ p: 10, minHeight: 460 }} variant='flat'>
      <Card.Header css={{ jc: 'center' }}>
        <Text css={{ textAlign: 'center', borderBottom: '1px solid $warning' }} h3>
          {t('skills.soft-skills.title')}
        </Text>
      </Card.Header>
      <Card.Body>
        <Col css={{ textAlign: 'center' }}>
          {skills.map((skill) => (
            <Badge css={{ bg: '$warningLightContrast', color: '$accents0', m: 4 }} size='lg' key={skill.id}>
              {skill.title}
            </Badge>
          ))}
        </Col>
      </Card.Body>
      <Card.Footer>
        <Fragment />
      </Card.Footer>
    </Card>
  )
}
