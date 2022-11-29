import { About, Header, Layout, Skills, Works } from '@/components'
import { Awards } from '@/components/Awards'

export default function Home() {
  return (
    <Layout>
      <Header />
      <Works />
      <About />
      <Skills />
      <Awards />
    </Layout>
  )
}
