import metadata from '@/config/metadata'
import Layout from '@/layout'
import * as types from '@/types'

export default function Home(props: types.HomeProps) {
  return (
    <Layout metadata={props.metadata}>
      <div>hello world</div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  return { props: { metadata } }
}
