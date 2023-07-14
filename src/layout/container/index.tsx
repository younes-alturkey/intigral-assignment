import * as types from '@/types'

export default function Container(props: types.ContainerProps) {
  return <div className="py-8">{props.children}</div>
}
