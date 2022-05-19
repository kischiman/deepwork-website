import { FC } from 'react'
import { ArticleList } from './ArticleList'
import { ARTICLES } from '../../data/articles'
import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      paddingTop: theme.spacing(9),
      paddingBottom: theme.spacing(9),
    },
  })
)
export const Articles: FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <ArticleList data={ARTICLES} />
    </div>
  )
}
