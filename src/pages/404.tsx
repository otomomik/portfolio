import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { Meta } from '../component/Meta'

export const NotFound: FC = () => {
  return (
    <>
      <Meta title="Not Found" noindex />
      <h1>Not Found</h1>
      <Link to="/">トップへ戻る</Link>
    </>
  )
}
