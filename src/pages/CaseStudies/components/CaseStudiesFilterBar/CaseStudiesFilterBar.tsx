import { FC, useState } from 'react'
import { CaseStudyType } from '../../../../shared/enums/caseStudies'
import { separateCamelCase } from '../../../../shared/utils/text'
import { createStyles, Divider, Grid, makeStyles, Theme } from '@material-ui/core'

interface Props {
  onClick: (value: CaseStudyType) => void
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      marginBottom: theme.spacing(15.125),
    },
    caseStudyWrapper: {
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    dividerWrapper: {
      height: 60,
      marginBottom: 17,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    divider: {
      width: '100%',
    },
    span: {
      fontFamily: 'IBM Plex Sans',
      fontWeight: 600,
      fontSize: theme.spacing(2),
      marginRight: theme.spacing(6.75),
      lineHeight: '20px',
      letterSpacing: 2,
      cursor: 'pointer',
      textTransform: 'uppercase',
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(2.5),
      },
      [theme.breakpoints.down('sm')]: {
        marginRight: 0,
        marginBottom: theme.spacing(2.5),
      },
      '&::before': {
        content: '" "',
        height: 90,
        top: -84,
        width: '100%',
        left: '50%',
        borderRadius: '50%',
        position: 'absolute',
        transform: 'translateX(-50%)',
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      },
    },
    active: {
      color: theme.palette.primary.main,
      '&::before': {
        width: 60,
        height: 60,
        visibility: 'visible',
        border: '7px solid #000',
        backgroundColor: theme.palette.primary.main,
      },
    },
  })
)

export const CaseStudiesFilterBar: FC<Props> = ({ onClick }) => {
  const [active, setActive] = useState<CaseStudyType>(CaseStudyType.allWork)
  const caseStudyTypes = [...Object.values(CaseStudyType)]
  const classes = useStyles()

  const handleClick = (type: CaseStudyType) => () => {
    onClick(type)
    setActive(type)
  }

  return (
    <Grid container className={classes.wrapper}>
      <Grid container item xs={12} alignItems="center" className={classes.dividerWrapper}>
        <Divider variant="fullWidth" className={classes.divider} />
      </Grid>
      <Grid container item xs={12} className={classes.caseStudyWrapper}>
        {caseStudyTypes.map((type, index) => (
          <span
            key={index}
            className={`${classes.span} ${active === type && classes.active}`}
            onClick={handleClick(type)}>
            {separateCamelCase(type)}
          </span>
        ))}
      </Grid>
    </Grid>
  )
}
