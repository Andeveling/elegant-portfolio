import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from '@/components'
import { Home } from '@/pages'
import { PublicRoutes } from '@/routes'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<></>} />
        <Route path={PublicRoutes.HOME} element={<Home />} />
        <Route path={PublicRoutes.ABOUT} element={<h1>About</h1>} />
        <Route path={PublicRoutes.WORK} element={<h1>Work</h1>} />
        <Route path={PublicRoutes.CONTACT} element={<h1>Contact</h1>} />
        <Route path='*' element={<h1>404 no found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
