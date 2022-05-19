import { Box, Link, Typography } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { FC, useEffect, useRef } from 'react'
import { ITalkingPoint } from '../../CaseStudies/interfaces'
import { useStyles } from './styles'

interface Props {
  scrollToItem: boolean
  observer: any
  talkingPoint: ITalkingPoint
  hiddenTitle?: boolean
  hiddenDescription?: boolean
}
export const TalkingPoint: FC<Props> = ({ scrollToItem, observer, talkingPoint, hiddenTitle }) => {
  const ref = useRef<HTMLDivElement>(null)
  const classes = useStyles()

  useEffect(() => {
    if (scrollToItem) {
      ref.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [scrollToItem])

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current)
      }
    }
  }, [observer])

  return (
    <div ref={ref} data-id={talkingPoint.label}>
      <Box component="section" mb={12}>
        {hiddenTitle && (
          <Box mb={3.1}>
            <Typography variant="h4">{talkingPoint.label}</Typography>
          </Box>
        )}
        <Box mb={4}>
          <Typography variant="body1">{talkingPoint.description}</Typography>
        </Box>
        <Box component="figure" mb={4}>
          {talkingPoint.image && <img src={talkingPoint.image} alt={talkingPoint.label} className={classes.image} />}
        </Box>
        <Box display="flex">
          {talkingPoint.links?.map((link, index) =>
            link.url ? (
              <Box mr={2} key={index}>
                <Link href={link.url}>
                  <Box display="flex" alignItems="center">
                    <span>{link.label}</span> <ChevronRightIcon />
                  </Box>
                </Link>
              </Box>
            ) : null
          )}
        </Box>
      </Box>
    </div>
  )
}
