import { FC, ReactNode } from 'react'
import { SharableButtons } from '../../shared/interfaces/sharableButtons'
import { useHistory } from 'react-router-dom'
import { RoutePaths } from '../../routePaths'
import { Box, Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core'

interface Props {
  preffix?: string | ReactNode
  title: string | ReactNode
  subtitle?: string | ReactNode
  buttons?: SharableButtons[]
}

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      wrapper: {
        maxWidth: '80%',
        marginBottom: theme.spacing(10.5),
        [theme.breakpoints.down('lg')]: {
          maxWidth: '60%',
        },
        [theme.breakpoints.down('sm')]: {
          maxWidth: '100%',
        },
      },
      preffix: {
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: theme.spacing(2),
        lineHeight: 1.5,
        letterSpacing: 1,
      },
      title: {
        marginBottom: theme.spacing(5.25),
        [theme.breakpoints.down('md')]: {
          fontSize: 62,
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: 52,
        },
      },
      subtitle: {
        marginBottom: theme.spacing(6),
        maxWidth: '810px',
      },
      buttonWrapper: {
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
          flexDirection: 'column',
          '& > button': {
            width: '100%',
          },
        },
      },
      button: {
        padding: theme.spacing(1.5, 2.75),
        marginRight: theme.spacing(2.5),
        fontSize: theme.spacing(2.25),
        lineHeight: 1.333,
        fontWeight: 600,
        textTransform: 'capitalize',
        [theme.breakpoints.down('md')]: {
          padding: theme.spacing(1, 3),
          fontSize: theme.spacing(2.5),
        },
        [theme.breakpoints.down('sm')]: {
          padding: theme.spacing(0.8, 1.5),
          fontSize: theme.spacing(2.25),
          marginBottom: theme.spacing(2),
        },
      },
      span: {
        display: 'flex',
        alignItems: 'center',
      },
    }),
  { index: 999 }
)

export const PageHeader: FC<Props> = ({ title, buttons, preffix, subtitle }) => {
  const history = useHistory()
  const classes = useStyles()

  const handleNavigate = (item: SharableButtons) => () => {
    if (item.link?.includes('http') || item.link?.includes('https')) {
      window.open(item.link, '__blank')
      return
    }
    if (item.link && (typeof item.link === 'string' || Object.values(RoutePaths).includes(item.link))) {
      history.push(item.link)
    }
  }

  return (
    <div className={classes.wrapper}>
      {preffix && (
        <Typography variant="caption" className={classes.preffix}>
          {preffix}
        </Typography>
      )}
      <Typography variant="h1" component="div" classes={{ root: classes.title }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle1" classes={{ root: classes.subtitle }}>
          {subtitle}
        </Typography>
      )}
      <Box className={classes.buttonWrapper}>
        {buttons?.map((item, index) => (
          <Button
            key={index}
            className={classes.button}
            variant={item.type ?? 'contained'}
            color="primary"
            onClick={item.onClick ? item.onClick : handleNavigate(item)}>
            {item.title}
            {item.icon && <span className={classes.span}>{item.icon}</span>}
          </Button>
        ))}
      </Box>
    </div>
  )
}
