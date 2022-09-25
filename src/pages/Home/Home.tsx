import { About, Header, Layout, Skills, Works } from '@/components'
import { Spacer } from '@nextui-org/react'

export default function Home() {
  return (
    <Layout>
      <Spacer id='home' />
      <Header />
      <Spacer id='works' />
      <Works />
      <Spacer id='about' />
      <About />
      <Spacer id='skills' />
      <Skills />
    </Layout>
  )
}
