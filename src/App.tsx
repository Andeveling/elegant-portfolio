import { Nav, About, Footer } from '@/components'
import { Home } from '@/pages'
import { PublicRoutes } from '@/routes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { globalStyles } from '@/Theme'
import { useRef } from 'react'

export default function App() {
  globalStyles()
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={PublicRoutes.HOME} element={<Home />} />
        <Route path={PublicRoutes.ABOUT} element={<About />} />
        <Route path={PublicRoutes.WORK} element={<h1>Work</h1>} />
        <Route path={PublicRoutes.CONTACT} element={<h1>Contact</h1>} />
        <Route path='*' element={<h1>404 no found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
