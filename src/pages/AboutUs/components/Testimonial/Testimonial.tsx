import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import { FC } from 'react'
import { IFeedback } from '../../../../shared/interfaces/testimonials'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    employeeTestimonialWrap: {
      backgroundColor: 'white',
      color: '#000',
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      justifyContent: 'space-between',
      display: 'flex',
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        marginTop: 180,
        paddingLeft: theme.spacing(2.25),
        paddingRight: theme.spacing(2.25),
        flexDirection: 'column-reverse',
      },
    },
    evenTestimonialWrap: {
      marginRight: theme.spacing(9),
      [theme.breakpoints.down('md')]: {
        margin: 0,
      },
    },
    oddTestimonialWrap: {
      marginLeft: theme.spacing(9),
      [theme.breakpoints.down('md')]: {
        margin: 0,
      },
    },
    testimonialImage: {
      width: 239,
      height: 239,
    },
    mobileImageWrapper: {
      position: 'absolute',
      top: -180,
    },
    oddImageBox: {
      marginLeft: theme.spacing(-16.2),
      [theme.breakpoints.down('md')]: {
        margin: 0,
      },
    },
    evenImageBox: {
      marginRight: theme.spacing(-16.2),
      [theme.breakpoints.down('md')]: {
        margin: 0,
      },
    },
    testimonialMessage: {
      fontFamily: 'Montserrat',
      fontStyle: 'italic',
      fontSize: theme.spacing(2),
      lineHeight: 2,
      fontWeight: 400,
    },
    author: {
      fontFamily: 'Montserrat',
      fontSize: theme.spacing(1.75),
      lineHeight: 1.714,
      letterSpacing: 1,
      fontWeight: 600,
    },
    jobPosition: {
      fontFamily: 'Montserrat',
      fontSize: theme.spacing(1.75),
      lineHeight: 1.714,
      letterSpacing: 1,
      fontWeight: 400,
    },
  })
)

interface Props {
  isOdd: boolean
  isMobile?: boolean
  feedback: IFeedback
}
export const Testimonial: FC<Props> = ({ isMobile, isOdd, feedback }) => {
  const classes = useStyles()
  const classNames = {
    wrapper: isMobile ? '' : isOdd ? classes.oddTestimonialWrap : classes.evenTestimonialWrap,
    imageWrapper: isMobile ? classes.mobileImageWrapper : isOdd ? classes.oddImageBox : classes.evenImageBox,
  }
  return (
    <div className={`${classes.employeeTestimonialWrap} ${classNames.wrapper}`}>
      <Box maxWidth={380} pt={3} pb={3} {...(isOdd ? { ml: 4 } : { mr: 3 })}>
        <p className={classes.testimonialMessage}>{feedback.message}</p>
        <Box mt={3}>
          <Box>
            <p className={classes.author}>{feedback.author}</p>
          </Box>
          <Box>
            <p className={classes.jobPosition}>{feedback.position}</p>
          </Box>
        </Box>
      </Box>
      <Box className={classNames.imageWrapper} order={isOdd ? -1 : 2}>
        <img src={feedback.image} alt={feedback.author} className={classes.testimonialImage} />
      </Box>
    </div>
  )
}
