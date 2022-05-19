import { FC } from 'react'
import { ICaseStudy } from '../../interfaces'
import { CaseStudyItem } from '../CaseStudyItem'
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core'

interface Props {
  data: ICaseStudy[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
      },
    },
    itemWrapper: {
      maxWidth: 600,
      marginBottom: 55,
      [theme.breakpoints.down('md')]: {
        marginBottom: 85,
      },
      [theme.breakpoints.down('xs')]: {
        maxWidth: '100%',
      },
      '&:nth-child(even)': {
        marginTop: 60,
        [theme.breakpoints.down('xs')]: {
          marginTop: 0,
        },
      },
    },
  })
)

export const CaseStudiesList: FC<Props> = ({ data }) => {
  const classes = useStyles()
  return (
    <Grid container spacing={4} justifyContent="space-between" className={classes.wrapper}>
      {data.map((caseStudy) => (
        <Grid key={caseStudy.id} item xs={12} sm={12} md={12} lg={6} className={classes.itemWrapper}>
          <CaseStudyItem {...caseStudy} />
        </Grid>
      ))}
    </Grid>
  )
}
