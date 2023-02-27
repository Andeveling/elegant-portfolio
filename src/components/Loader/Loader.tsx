import { Loading } from '@nextui-org/react'
import { Box } from '../Layout'
import { AllCSS } from '@/models/AllCss.model'

const Loader = () => {
  const css: AllCSS = {
    loader: {
      minWidth: '100vw',
      minHeight: '100vh',
      bg: '$background',
      display: 'grid',
      placeContent: 'center',
    },
  }
  return (
    <Box css={css.loader}>
      <Loading type='gradient' color='warning' loadingCss={{ $$loadingSize: '200px', $$loadingBorder: '10px' }} />
    </Box>
  )
}
export default Loader
