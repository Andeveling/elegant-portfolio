import { useEffect, useState } from 'react'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'

export const ScrollToTop = () => {
  const [scrolled, setScrolled] = useState(true)
  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <>
      {scrolled ? (
        <KeyboardDoubleArrowUpIcon
          onClick={scrollToTop}
          sx={{
            fontSize: 50,
            position: 'fixed',
            bottom: '15px',
            right: '20px',
            zIndex: 100,
            cursor: 'pointer',
            color: 'gold',
          }}
        />
      ) : (
        <></>
      )}
    </>
  )
}
