import { Subtitle } from '@/components'
import { Spacer, Text, Col } from '@nextui-org/react'

export default function HeaderSoftSkills() {
  return (
    <Col css={{ minHeight: 210 }}>
      <Subtitle subtitle='Soft Skills' es='Habilidades Blandas' />
      <Text size='$lg'>
        Estas son las habilidades obtenidas a través de los años en mis trabajos pasados, he tenido la oportunidad de
        trabajar en empresas del sector construcción en distintas áreas como, campo, operativo, administrativo. Esto me
        ha permitido poner en práctica distintas habilidades blandas aplicadas al área laboral.
      </Text>
      <Spacer y={1} />
    </Col>
  )
}
