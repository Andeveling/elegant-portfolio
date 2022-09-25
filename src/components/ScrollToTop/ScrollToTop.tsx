import { useEffect, useState } from 'react'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'

export const ScrollToTop = () => {
  const [scrolled, setScrolled] = useState(true)
  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 250 ? setScrolled(true) : setScrolled(false)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 100,
      behavior: 'smooth',
    })
  }
  return (
    <>
      {scrolled ? (
        <KeyboardDoubleArrowUpIcon
          onClick={scrollToTop}
          sx={{
            fontSize: 40,
            position: 'fixed',
            bottom: 15,
            right: 30,
            zIndex: 3,
            cursor: 'pointer',
            borderRadius: '50%',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px',
          }}
        />
      ) : (
        <></>
      )}
    </>
  )
}
