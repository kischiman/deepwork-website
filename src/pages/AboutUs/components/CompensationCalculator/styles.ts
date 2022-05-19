import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      sliderActive: {
        width: 36,
        height: 36,
        boxShadow: '0px 0px 0px 8px rgb(0 0 0)!important',
        border: `10px solid ${theme.palette.primary.main}`,
        marginTop: -18,
      },
      calculatorTitle: {
        marginBottom: theme.spacing(10.2),
        [theme.breakpoints.down('md')]: {
          marginBottom: theme.spacing(4),
        },
      },
      sliderMarkActive: {
        color: '#fff',
        width: 48,
        height: 48,
        border: `12px solid ${theme.palette.primary.main}`,
        boxShadow: '0px 0px 0px 8px rgb(0 0 0)!important',
        transition: 'box-shadow, border 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        marginTop: -24,
      },
      sliderMarkLabel: {
        color: '#fff',
        textTransform: 'uppercase',
        fontFamily: 'IBM Plex Sans',
        transform: 'none',
        '&[data-index="0"]': {
          left: 0,
        },
        '&[data-index="1"]': {
          right: 0,
          left: 'unset!important',
        },
      },
      sectionLabel: {
        fontSize: theme.spacing(2.25),
      },
      controlLabel: {
        margin: 0,
        '& .MuiButtonBase-root': {
          display: 'none',
        },
      },
      controlBlockWrapper: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          alignItems: 'flex-start',
        },
      },
      controlBlock: {
        [theme.breakpoints.down('sm')]: {
          marginBottom: theme.spacing(2),
        },
        '& label': {
          display: 'flex',
          maxWidth: 184,
          backgroundColor: '#fff',
          fontWeight: 600,
          textTransform: 'uppercase',
          padding: theme.spacing(2),
          color: '#000',
          borderRadius: 8,
          cursor: 'pointer',
          [theme.breakpoints.down('md')]: {
            maxWidth: 'unset',
          },
        },
        '& .MuiButtonBase-root': {
          display: 'none',
        },
      },
      secondControlBlock: {
        '& label': {
          paddingTop: theme.spacing(3),
          [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(2),
          },
        },
      },
      thirdControlBlock: {
        '& label': {
          paddingTop: theme.spacing(5.3),
          [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(2),
          },
        },
      },
      activeLabel: {
        '& label': {
          backgroundColor: theme.palette.primary.main,
        },
      },
      projectEarningsWrap: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
          flexDirection: 'column',
          alignItems: 'center',
        },
      },
      mentoringWrap: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: theme.spacing(6.1),
        [theme.breakpoints.down('md')]: {
          marginBottom: 0,
        },
      },
      projectFees: {
        marginRight: theme.spacing(4),
        maxWidth: 175,
        [theme.breakpoints.down('md')]: {
          marginRight: 0,
          marginBottom: theme.spacing(4),
        },
      },
      profitShares: {
        maxWidth: 300,
        [theme.breakpoints.down('md')]: {
          marginBottom: 0,
        },
      },
      switchRoot: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: 50,
        minWidth: 60,
        height: 24,
      },
      switchBase: {
        padding: theme.spacing(0.5, 0.9),
      },
      switchChecked: {
        backgroundColor: 'transparent',
        transform: 'translateX(30px)!important',
        '& .MuiSwitch-thumb': {
          backgroundColor: 'white',
        },
        '& + span.MuiSwitch-track': {
          backgroundColor: 'transparent!important',
        },
      },
      switchThumb: {
        height: 16,
        width: 16,
        backgroundColor: 'black',
      },
      calculatorInfoBlock: {
        backgroundColor: '#FFD401',
        borderRadius: 4,
        padding: theme.spacing(2, 4),
        color: '#000',
      },
      letterBlock: {
        marginRight: theme.spacing(4.4),
      },
      infoTop: {
        backgroundColor: '#000',
        width: 8,
        height: 8,
        marginBottom: theme.spacing(1),
      },
      infoBoxText: {
        fontFamily: 'Montserrat',
        fontSize: theme.spacing(1.75),
        lineHeight: 1.5,
      },
      calculatorInfoBottom: {
        backgroundColor: '#000',
        width: 8,
        height: 60,
      },
      resultsBox: {
        backgroundColor: '#fff',
        color: '#000',
        boxShadow: `15px 8px 0 4px ${theme.palette.primary.main}`,
      },
      resultsBoxTitle: {
        marginBottom: theme.spacing(6.1),
        [theme.breakpoints.down('md')]: {
          marginBottom: theme.spacing(3),
        },
      },
      calcFeesLabel: {
        fontFamily: 'IBM Plex Sans',
        fontSize: theme.spacing(1.4),
        letterSpacing: 1.17,
        lineHeight: 1.714,
        fontWeight: 500,
      },
      calcFeesPrice: {
        fontFamily: 'IBM Plex Sans',
        fontSize: theme.spacing(6),
        lineHeight: 1.167,
      },
      calcProjectsText: {
        lineHeight: 1.5,
        fontWeight: 400,
        fontFamily: 'Montserrat',
        fontSize: 12,
      },
      monthBox: {
        fontFamily: 'IBM Plex Sans',
        lineHeight: 1.5,
        fontWeight: 500,
        fontSize: theme.spacing(3),
      },
      getStartedButton: {
        paddingTop: theme.spacing(1.375),
        paddingBottom: theme.spacing(1.375),
        fontFamily: 'IBM Plex Sans',
        fontWeight: 600,
        lineHeight: 1.333,
        fontSize: theme.spacing(2.25),
      },
      profitPlus: {
        marginRight: '20px',
        marginLeft: '-50px',
        [theme.breakpoints.down('md')]: {
          marginLeft: 0,
        },
      },
      completedProjectBox: {
        borderRadius: 4,
        '& button, span': {
          height: 32,
          backgroundColor: theme.palette.primary.main,
          fontSize: theme.spacing(2),
          fontFamily: 'IBM Plex Sans',
          fontWeight: 700,
        },
        '& span': {
          display: 'flex',
          alignItems: 'center',
        },
        '& button:first-child': {
          borderTopLeftRadius: 4,
          borderBottomLeftRadius: 4,
        },
        '& button:last-child': {
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
        },
        '& button': {
          border: 0,
          cursor: 'pointer',
          padding: theme.spacing(0, 2),
        },
      },
      disclaimer: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 1.5,
      },
      tooltipRoot: {
        backgroundColor: '#000',
        boxShadow: `4px 4px ${theme.palette.primary.main}`,
        borderRadius: 0,
        padding: theme.spacing(3.75, 4.375),
        fontSize: theme.spacing(1.75),
        fontFamily: 'Montserrat',
        lineHeight: 1.5,
        fontWeight: 500,
        maxWidth: 530,
      },
    }),
  { index: 999 }
)
