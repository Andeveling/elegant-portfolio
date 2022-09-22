import { Text, Card } from '@nextui-org/react'
import { NavLink } from 'react-router-dom'

export const HomeLink = () => (
  <Card isPressable variant='flat' css={{ borderRadius: 0, width: '100%' }}>
    <NavLink to='/home'>
      <Text h3>Home</Text>
    </NavLink>
  </Card>
)
