import type { FC } from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  title?: string
  noindex?: boolean
}

export const Meta: FC<Props> = ({ title, noindex = false }) => {
  const pageTitle = title ? `${title} | otomomik` : 'otomomik'

  return (
    <Helmet>
      <title>{pageTitle}</title>
      {noindex && <meta name="robots" content="noindex" />}
    </Helmet>
  )
}
