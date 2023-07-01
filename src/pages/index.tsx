import type { FC } from 'react'
import { Meta } from '../component/Meta'

type Props = {}

export const Home: FC<Props> = () => {
  return (
    <>
      <Meta />
      <h1>Hello otomomik!!</h1>
    </>
  )
}
