import { Box, createStyles, Link, makeStyles, Theme, Typography } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { Motivation } from '../../../../shared/interfaces/testimonials'
import { FC } from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mobileWrapper: {
      marginBottom: theme.spacing(4),
    },
    oddCommentBox: {
      padding: theme.spacing(7.5, 16, 7.5, 7),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(0),
      },
    },
    evenCommentBox: {
      padding: theme.spacing(7.5, 7, 7.5, 16),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(0),
      },
    },
  })
)
interface Props {
  isOdd: boolean
  isMobile?: boolean
  motivation: Motivation
}
export const MotivationalComment: FC<Props> = ({ isMobile, motivation, isOdd }) => {
  const classes = useStyles()
  const wrapperClass = isMobile ? classes.mobileWrapper : isOdd ? classes.oddCommentBox : classes.evenCommentBox
  return (
    <Box className={wrapperClass}>
      <Box mb={2}>
        <Typography variant="h3">{motivation.title}</Typography>
      </Box>
      <Box mb={4}>
        {motivation.message.map((item, index) => (
          <Box key={index} mb={index !== motivation.message.length - 1 ? 3 : 0}>
            <Typography variant="body2">{item}</Typography>
          </Box>
        ))}
      </Box>
      {motivation.link?.url && (
        <Link href={motivation.link?.url} target="_blank" rel="noreferrer">
          <Box component="span" display="inline-flex" alignItems="center">
            {motivation.link?.label} <ChevronRightIcon />
          </Box>
        </Link>
      )}
    </Box>
  )
}
