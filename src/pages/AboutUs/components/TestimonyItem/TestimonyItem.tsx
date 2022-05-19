import { ITestimonials } from '../../../../shared/interfaces/testimonials'
import { FC } from 'react'
import { Box, createStyles, Grid, makeStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core'
import { Testimonial } from '../Testimonial'
import { MotivationalComment } from '../MotivationalComment'

interface Props extends ITestimonials {
  isOdd: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    testimonialWrapper: {
      marginBottom: theme.spacing(12),
      [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(6),
      },
    },
    oddCommentBox: {
      padding: theme.spacing(7.5, 16, 7.5, 7),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(7.5),
      },
    },
    evenCommentBox: {
      padding: theme.spacing(7.5, 7, 7.5, 16),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(7.5),
      },
    },
  })
)
export const TestimonyItem: FC<Props> = ({ isOdd, feedback, motivation }) => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Box className={classes.testimonialWrapper}>
      <Grid container direction={!matches ? (isOdd ? 'row-reverse' : 'row') : 'column-reverse'}>
        <Grid item xs={12} lg={6}>
          <Testimonial isMobile={matches} isOdd={isOdd} feedback={feedback} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <MotivationalComment isMobile={matches} isOdd={isOdd} motivation={motivation} />
        </Grid>
      </Grid>
    </Box>
  )
}
