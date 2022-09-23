import { Container, Text, Spacer } from '@nextui-org/react'
import { useLocation } from 'react-router-dom'
import { Box } from '../Layout'

export default function Skills() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <Container id='skills' fluid alignContent='center' css={{ boxSizing: 'border-box', p: 0 }}>
      <Box>
        <Text size={80} h1>
          Skills.
        </Text>
      </Box>
    </Container>
  )
}
