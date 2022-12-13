import { Header, Footer, BackToTop } from '@/layout'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <BackToTop />
    </>
  )
}
