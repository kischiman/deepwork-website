import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ARTICLES } from '../../data/articles'
import { IArticle } from '../../shared/interfaces/articles'
import { PageHeader } from '../../components/PageHeader'
import { Box, Container, Typography } from '@material-ui/core'

export const Article: FC = () => {
  const params: { slug: string } = useParams()
  const [article, setArticle] = useState<IArticle | null>(null)

  useEffect(() => {
    if (params.slug) {
      const found = ARTICLES.find((item) => item.link === decodeURIComponent(params.slug))
      setArticle(found ? found : null)
    }
  }, [params.slug])

  return (
    <>
      <Container maxWidth="lg">
        <PageHeader
          title={article?.title}
          subtitle={
            <Box display="flex">
              <Typography variant="subtitle1">
                {article?.date} {'//'} by
              </Typography>
              <Box ml={1}>
                <Typography variant="subtitle1" component="mark" color="primary">
                  {article?.author}
                </Typography>
              </Box>
            </Box>
          }
        />
      </Container>
      <Container maxWidth="xl">
        <main className="article-details" dangerouslySetInnerHTML={{ __html: article?.content ?? '' }} />
      </Container>
    </>
  )
}
