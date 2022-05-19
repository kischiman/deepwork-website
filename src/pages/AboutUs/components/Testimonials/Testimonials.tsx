import { FC } from 'react'
import { TestimonyItem } from '../TestimonyItem'
import { ITestimonials } from '../../../../shared/interfaces/testimonials'
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

interface Props {
  data: ITestimonials[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    testimonialWrapper: {
      marginTop: theme.spacing(20),
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(7.5),
      },
    },
  })
)
export const Testimonials: FC<Props> = ({ data }) => {
  const classes = useStyles()
  return (
    <Box className={classes.testimonialWrapper}>
      {data.map((item, index) => (
        <TestimonyItem key={index} isOdd={index % 2 !== 0} feedback={item.feedback} motivation={item.motivation} />
      ))}
    </Box>
  )
}
