import { Subtitle } from '@/components'
import { Spacer, Text, Col } from '@nextui-org/react'

export default function HeaderSoftSkills() {
  return (
    <Col css={{ minHeight: 210 }}>
      <Subtitle subtitle='Soft Skills' es='Habilidades Blandas' />
      <Text size='$lg'>
        Aunque mis primeros pasos como programador fueron agenos al lenguaje{' '}
        <Text b css={{ color: '$yellow700' }}>
          Javascript
        </Text>
        , mis habilidades hoy en día resaltan como Web developer, la gráfica a continuación muestra las tecnologías a
        las que más he dedicado a aprender.
      </Text>
      <Spacer y={1} />
    </Col>
  )
}
