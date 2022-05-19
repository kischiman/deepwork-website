import { FC } from 'react'
import { ArticleListItem } from '../ArticleListItem'
import { IArticle } from '../../../shared/interfaces/articles'

interface Props {
  data: IArticle[]
}
export const ArticleList: FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <ArticleListItem key={index} {...item} />
      ))}
    </>
  )
}
