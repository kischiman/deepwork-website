import { FC } from 'react'
import { Box, createStyles, makeStyles } from '@material-ui/core'

interface Props {
  title: string
  subtitle: string
}
const useStyles = makeStyles(
  (theme) =>
    createStyles({
      wrapper: {
        borderLeft: '1px solid #fff',
        paddingLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 220,
        color: '#b3b3b3',
        [theme.breakpoints.down('md')]: {
          borderLeft: '0',
          backgroundColor: '#000',
          padding: theme.spacing(1.875),
          flexDirection: 'column',
          alignItems: 'flex-start',
          maxWidth: 250,
          marginRight: 0,
        },
      },
      title: {
        fontSize: theme.spacing(2),
        textTransform: 'uppercase',
        fontWeight: 600,
        fontFamily: 'IBM Plex Sans',
        letterSpacing: 1.78,
        lineHeight: 1.5,
        [theme.breakpoints.down('md')]: {
          borderLeft: '1px solid #fff',
          paddingLeft: theme.spacing(2),
          marginBottom: theme.spacing(1.25),
        },
      },
      subtitle: {
        fontSize: theme.spacing(2),
        fontWeight: 400,
        letterSpacing: 1.14,
        lineHeight: 1.25,
        [theme.breakpoints.down('md')]: {
          paddingLeft: theme.spacing(2),
        },
      },
    }),
  { index: 999 }
)
export const BraggingItem: FC<Props> = ({ title, subtitle }) => {
  const classes = useStyles()
  return (
    <Box className={classes.wrapper}>
      <p className={classes.title}>
        <strong>{title}</strong>
      </p>
      <p className={classes.subtitle}>{subtitle}</p>
    </Box>
  )
}
