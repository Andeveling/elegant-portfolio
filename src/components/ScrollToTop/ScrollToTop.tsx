import { useEffect, useState } from 'react'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import { useNavigate } from 'react-router-dom'

export const ScrollToTop = () => {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 350 ? setScrolled(true) : setScrolled(false)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = (): void => {
    navigate('/')
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
            fontSize: 40,
            position: 'fixed',
            bottom: 15,
            right: 30,
            zIndex: 3,
            cursor: 'pointer',
            borderRadius: '50%',
            background: '#f5a524',
            color: 'black',
          }}
        />
      ) : (
        <></>
      )}
    </>
  )
}
