import { FC, ReactNode } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core'

interface Props {
  active: boolean
  Icon: ReactNode
  label: string
}
const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      wrapper: {
        display: 'flex',
        alignItems: 'center',
      },
      iconWrapper: {
        minWidth: 73,
        minHeight: 73,
        backgroundColor: 'white',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      activeIconWrapper: {
        minWidth: 73,
        minHeight: 73,
        backgroundColor: theme.palette.primary.main,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      label: {
        textTransform: 'uppercase',
        marginLeft: theme.spacing(1.8),
        fontSize: theme.spacing(1.75),
        lineHeight: 1.429,
        letterSpacing: 1,
        fontWeight: 700,
      },
    }),
  { index: 999 }
)

export const SkillsLabel: FC<Props> = ({ active, label, Icon }) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <div className={active ? classes.activeIconWrapper : classes.iconWrapper}>{Icon}</div>
      <span className={classes.label}>{label}</span>
    </div>
  )
}
