import { Footer, Header, Layout, Works } from '@/components'
import Skills from '@/components/Skills/Skills'
import { Spacer } from '@nextui-org/react'
import React, { useRef } from 'react'
import { About } from '../../components/About'
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop'
import { Link, ScrollRestoration } from 'react-router-dom'

export default function Home() {
  const header = useRef(null)
  const works = useRef(null)
  const about = useRef(null)

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <Layout>
      <Header />
      <Spacer y={2} />
      <Works />
      <Spacer y={2} />
      <About />
      <Spacer y={2} />
      <Skills />
      <Spacer y={2} />
    </Layout>
  )
}
