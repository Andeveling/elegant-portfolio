import { Subtitle } from '@/components'
import { Spacer, Text, Col } from '@nextui-org/react'

export default function HeaderTechSkills() {
  return (
    <Col css={{ minHeight: 210 }}>
      <Subtitle subtitle='Tech Skills' es='Habilidades Técnicas' />
      <Text size='$lg'>
        Aunque mis primeros pasos como programador fueron en lenguajes como{' '}
        <Text b color='primary'>
          {' '}
          C
        </Text>{' '}
        y
        <Text b color='secondary'>
          {' '}
          C#.
        </Text>{' '}
        &nbsp;Mis habilidades hoy en día resaltan como Web developer haciendo uso de librerías{' '}
        <Text b css={{ color: '$yellow700' }}>
          Javascript
        </Text>
        , la gráfica a continuación muestra las tecnologías a las que más me he dedicado a aprender el útlimo año.
      </Text>
      <Spacer y={1} />
    </Col>
  )
}
