import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: 840,
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
  })
)
