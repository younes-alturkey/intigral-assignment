import Footer from '@/layout/footer'
import Head from '@/layout/head'
import Header from '@/layout/header'
import Main from '@/layout/main'
import * as types from '@/types'

export default function Layout(props: types.LayoutProps) {
  return (
    <>
      <Head metadata={props.metadata} />
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </>
  )
}
