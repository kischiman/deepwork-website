import { FC } from 'react'
import Link from '@material-ui/core/Link'
import { useHistory } from 'react-router-dom'
import { ICaseStudy } from '../../interfaces'
import { RoutePaths } from '../../../../routePaths'
import { Box, createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import { CaseStudyTypeStyled } from '../../../../components/CaseStudyTypeStyled'

interface Props extends ICaseStudy {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        height: 'unset',
      },
    },
    imageWrapper: {
      cursor: 'pointer',
      '& img': {
        width: 540,
        [theme.breakpoints.down('xs')]: {
          width: '100%',
        },
      },
    },
    boxWrapper: {
      position: 'relative',
      backgroundColor: '#000',
      marginTop: '-100px',
      width: 480,
      minHeight: 165,
      [theme.breakpoints.down('md')]: {
        width: '100%',
        marginTop: '-50px',
      },
    },
    box: {
      padding: theme.spacing(2.2, 3.4, 2.4, 5.6),
    },
    title: {
      marginTop: theme.spacing(1.2),
      marginBottom: theme.spacing(2.4),
    },
    description: {
      color: '#E0E0E0',
      marginBottom: theme.spacing(1.2),
    },
    link: {
      fontSize: 16,
      display: 'inline-flex',
      alignItems: 'center',
    },
    strongLink: {
      verticalAlign: 'middle',
      marginRight: 5,
    },
  })
)
export const CaseStudyItem: FC<Props> = ({ title, type, slug, description, mainImage }) => {
  const classes = useStyles()
  const history = useHistory()

  const handleClick = () => {
    slug && history.push(RoutePaths.caseStudy.replace(':slug', encodeURIComponent(slug)))
  }

  return (
    <div className={classes.wrapper}>
      <Box display="flex" className={classes.imageWrapper} onClick={handleClick} justifyContent="flex-end">
        <img src={mainImage} alt={title} />
      </Box>
      <div className={classes.boxWrapper}>
        <div className={classes.box}>
          <CaseStudyTypeStyled type={type} isUppercase />
          <Typography variant="h5" classes={{ root: classes.title }}>
            {title}
          </Typography>
          {description && (
            <Typography variant="body2" classes={{ root: classes.description }}>
              {description}
            </Typography>
          )}
          {slug && (
            <Link onClick={handleClick} className={classes.link}>
              <strong className={classes.strongLink}>View case study</strong>
              <ArrowRightAltIcon />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
