import { Footer, Nav, ScrollToTopRouter, WorkDetail } from '@/components'
import { Home } from '@/pages'
import { globalStyles } from '@/Theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PublicRoutes } from './routes'

export default function App() {
  globalStyles()
  return (
    <BrowserRouter>
      <ScrollToTopRouter />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={`${PublicRoutes.WORK}/:id`} element={<WorkDetail />} />
        <Route path='*' element={<h1>404 no found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
