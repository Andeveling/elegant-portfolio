import { Box } from '@/components'
import { Props } from '@/types'

export const Layout = ({ children }: Props) => (
  <Box
    css={{
      maxW: '100%',
    }}>
    {children}
  </Box>
)
