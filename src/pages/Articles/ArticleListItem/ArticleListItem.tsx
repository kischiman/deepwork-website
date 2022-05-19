import { FC } from 'react'
import { IArticle } from '../../../shared/interfaces/articles'
import { Button, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined'
import { useHistory } from 'react-router-dom'
import { RoutePaths } from '../../../routePaths'

interface Props extends IArticle {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    itemWrapper: {
      '&:not(:first-child)': {
        marginTop: theme.spacing(9),
      },
    },
    content: {
      marginLeft: theme.spacing(7.5),
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        marginTop: theme.spacing(5),
        padding: theme.spacing(0, 5),
      },
    },
    link: {
      fontSize: theme.spacing(2.25),
      display: 'inline-flex',
      alignItems: 'center',
      padding: theme.spacing(2, 4),
      marginTop: theme.spacing(4),
    },
    buttonText: {
      verticalAlign: 'middle',
      marginRight: 5,
      fontWeight: 600,
    },
    dateAuthor: {
      fontSize: theme.spacing(2),
      margin: theme.spacing(2, 0),
    },
    description: {
      fontSize: theme.spacing(2.3),
      margin: theme.spacing(2, 0),
    },
  })
)

export const ArticleListItem: FC<Props> = ({ title, author, description, link, date, image }) => {
  const classes = useStyles()
  const history = useHistory()

  const handleClick = () => {
    history.push(`${RoutePaths.articles}/${encodeURIComponent(link)}`)
  }

  return (
    <Grid container className={classes.itemWrapper}>
      <Grid item xs={12} sm={12} md={7}>
        <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />
      </Grid>
      <Grid item xs={12} sm={12} md={4} className={classes.content}>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body2" classes={{ root: classes.dateAuthor }}>
          {date} {'//'} by <mark>{author}</mark>
        </Typography>
        <Typography variant="body1" classes={{ root: classes.description }}>
          {description}
        </Typography>
        <Button color="primary" variant="contained" onClick={handleClick} className={classes.link}>
          <span className={classes.buttonText}>Continue reading</span>
          <KeyboardArrowRightOutlinedIcon />
        </Button>
      </Grid>
    </Grid>
  )
}
