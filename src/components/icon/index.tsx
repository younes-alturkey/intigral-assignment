import * as types from '@/types'
import { Icon } from '@iconify/react'

export default function IconifyIcon(props: types.IconProps) {
  return (
    <Icon
      onClick={props.onClick}
      className={props.className}
      icon={props.icon}
      fontSize={props.fontSize || '1.5rem'}
    />
  )
}
