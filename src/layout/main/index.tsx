import Container from '@/layout/container'
import * as types from '@/types'

export default function Main(props: types.MainProps) {
  return (
    <main>
      <Container>{props.children}</Container>
    </main>
  )
}
