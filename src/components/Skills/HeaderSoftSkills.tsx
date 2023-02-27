import { Subtitle } from '@/components'
import { Spacer, Text, Col } from '@nextui-org/react'
import { useTranslation } from 'react-i18next'

export default function HeaderSoftSkills() {
  const { t } = useTranslation('skills')
  return (
    <Col css={{ minHeight: 210 }}>
      <Subtitle title={t('skills.soft-skills.title')} />
      <Text size='$lg'>{t('skills.soft-skills.content-1')}</Text>
      <Spacer y={1} />
    </Col>
  )
}
