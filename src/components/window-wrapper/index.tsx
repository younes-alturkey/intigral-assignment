import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface WindowWrapperProps {
  children: JSX.Element
}

const WindowWrapper = (props: WindowWrapperProps) => {
  const router = useRouter()
  const [isWindowReady, setIsWindowReady] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') setIsWindowReady(true)
  }, [router.route])

  return isWindowReady ? <>{props.children}</> : null
}

export default WindowWrapper
