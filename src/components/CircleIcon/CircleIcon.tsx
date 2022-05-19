import { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      marginLeft: theme.spacing(2),
      width: theme.spacing(9.5),
      height: theme.spacing(9.5),
      border: '1px solid ' + theme.palette.primary.main,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
)
export const CircleIcon: FC = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.wrapper}>{children}</div>
}
