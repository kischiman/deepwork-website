import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core'

import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
} from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainImage: {
      width: '60%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    caseStudyWrapper: {
      backgroundImage: "url('https://deepworkphotos.s3.us-east-2.amazonaws.com/Deep+Layers+012x.png')",
      backgroundSize: '700px 700px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '-150px 70%',
      [theme.breakpoints.down('md')]: {
        backgroundImage: 'unset',
      },
    },
    verticalDivider: {
      '&::before': {
        content: '""',
        position: 'absolute',
        border: '2px solid #fff',
        top: 0,
        bottom: 0,
      },
      [theme.breakpoints.down('sm')]: {
        '&::before': {
          display: 'none',
        },
      },
    },
    withBackgroundImage: {
      backgroundImage: "url('https://deepworkphotos.s3.us-east-2.amazonaws.com/Deep+Layers+012x.png')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: 740,
      height: 740,
      display: 'block',
      position: 'absolute',
      right: 200,
      top: -200,
      zIndex: 100,
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    mainImageWrapper: {
      padding: 0,
      marginTop: theme.spacing(25),
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        marginTop: 'unset',
      },
    },
    caseStudyDescription: {
      backgroundColor: '#fff',
      color: '#000',
      marginBottom: theme.spacing(13.6),
      marginTop: theme.spacing(-75),
      padding: theme.spacing(65, 7.5, 5.6, 7.5),
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(0),
        padding: theme.spacing(2),
      },
    },
    mobileCaseStudyDescription: {
      color: '#fff',
    },
    contentWrapper: {
      position: 'relative',
      paddingTop: theme.spacing(20),
      [theme.breakpoints.down('md')]: {
        paddingTop: theme.spacing(2),
      },
    },
    desktopTalkingPointsWrapper: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    mobileTalkingPointsWrapper: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    leftGrid: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    listWrapper: {
      position: 'relative',
      height: '100%',
    },
    list: {
      top: '25%',
      position: 'sticky',
      marginLeft: '45px',
    },
    listItem: {
      textTransform: 'uppercase',
      fontFamily: 'IBM Plex Sans',
      lineHeight: 4,
      fontSize: theme.spacing(2),
      fontWeight: 700,
      letterSpacing: 2,
    },
    activeListItem: {
      color: theme.palette.primary.main,
      '&::before': {
        content: '" "',
        backgroundColor: theme.palette.primary.main,
        border: '7px solid #000',
        width: 60,
        height: 60,
        borderRadius: '50%',
        position: 'absolute',
        top: 35,
        left: -44,
        transform: 'translate(-50%, -50%)',
      },
    },
    nextImage: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    nextLink: {
      textTransform: 'uppercase',
      fontSize: theme.spacing(3),
      lineHeight: 2,
      letterSpacing: 1,
      fontWeight: 400,
    },
    nextStudyType: {
      textTransform: 'uppercase',
      fontSize: theme.spacing(1.5),
      lineHeight: 1.667,
      letterSpacing: 1,
      fontWeight: 400,
    },
    nextStudyDescription: {
      color: '#E0E0E0',
    },
  })
)

export const AccordionDetails = withStyles((theme) => ({
  root: {
    background: 'transparent',
    flexDirection: 'column',
  },
}))(MuiAccordionDetails)

export const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    background: 'transparent',
    marginBottom: 60,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:last-child': {
      '&:before': {
        display: 'none',
      },
    },
    '&:before': {
      top: 60,
      left: 25,
      bottom: -50,
      right: 'unset',
      width: 1,
      height: 'unset',
      backgroundColor: '#ccc',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion)

export const AccordionSummary = withStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: theme.spacing(3.75),
    minHeight: 56,
    fontSize: theme.spacing(2),
    marginLeft: 70,
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontFamily: 'IBM Plex Sans',
    '&$expanded': {
      color: '#fff',
      minHeight: 56,
      '&::before': {
        backgroundColor: '#fff',
      },
    },
    '&::before': {
      content: '" "',
      backgroundColor: theme.palette.primary.main,
      border: '7px solid #000',
      width: 60,
      height: 60,
      borderRadius: '50%',
      position: 'absolute',
      top: 25,
      left: -45,
      transform: 'translate(-50%, -50%)',
    },
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
}))(MuiAccordionSummary)
