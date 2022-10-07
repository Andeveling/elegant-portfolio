import { About, Header, Layout, Skills, Works } from '@/components'
import { Spacer } from '@nextui-org/react'

export default function Home() {
  return (
    <Layout>
      <Header />
      <Works />
      <About />
      <Skills />
    </Layout>
  )
}
