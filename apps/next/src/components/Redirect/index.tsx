import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
type Props = {
  path: string
}

export default function Redirect({ path }: Props) {
  const router = useRouter()
  useEffect(() => {
    console.log('redirecting to' + path)
    router.push(path)
  }, [])
  return <></>
}
