import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageHeaderHighlight: {
      color: theme.palette.primary.main,
    },
    connectWrapper: {
      backgroundColor: '#fff',
      padding: theme.spacing(17.5, 0, 24.125),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(9.75, 0, 15),
        marginBottom: -35,
      },
    },
    connectBox: {
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
      },
    },
    connectTitle: {
      color: '#292929',
      lineHeight: 1.417,
      fontWeight: 600,
    },
    talkLinkWrap: {
      marginTop: theme.spacing(16),
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(0),
      },
    },
    talkLink: {
      color: theme.palette.primary.main,
      textTransform: 'uppercase',
      fontSize: theme.spacing(3),
      textDecoration: 'none',
      fontWeight: 400,
      lineHeight: 2,
      [theme.breakpoints.down('sm')]: {
        '& > div': {
          display: 'flex',
          flexDirection: 'column-reverse',
        },
      },
    },
    circleBlockWrap: {
      marginTop: '-190px',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      justifyContent: 'center',
      maxWidth: '1500px',
      color: '#000',
      overflow: 'hidden',
      [theme.breakpoints.down('sm')]: {
        marginTop: 0,
      },
      '& div': {
        display: 'inline-flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: '50%',
        '& > span': {
          textAlign: 'left',
          marginLeft: theme.spacing(4),
          [theme.breakpoints.down('sm')]: {
            margin: '0 0 98px 0',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            '& ~ div > span': {
              margin: '0 0 112px 0',
              '& ~ div': {
                justifyContent: 'space-between',
                '& > span': {
                  margin: '165px 0 0 0',
                },
              },
            },
            '& > *': {
              alignSelf: 'flex-start',
            },
            '& p': {
              maxWidth: 260,
            },
          },
          '& h5': {
            display: 'inline-flex',
            alignItems: 'center',
            marginBottom: theme.spacing(3.25),
            '&::before': {
              content: '""',
              display: 'inline-flex',
              width: 24,
              height: 24,
              backgroundColor: '#000',
              borderRadius: '50%',
              marginRight: 10,
            },
          },
        },
      },
    },
    circleMainTitle: {
      lineHeight: 1.313,
      color: '#292929',
      letterSpacing: 0,
      marginBottom: theme.spacing(5.75),
    },
    circleTitle: {
      fontSize: theme.spacing(2),
      fontFamily: 'IBM Plex Sans',
      fontWeight: 600,
      textTransform: 'uppercase',
      lineHeight: 1.25,
      letterSpacing: 1,
      marginBottom: theme.spacing(3.25),
      display: 'flex',
      alignItems: 'center',
      '&::before': {
        content: "''",
        display: 'flex',
        width: 24,
        height: 24,
        borderRadius: '50%',
        backgroundColor: '#000',
        marginRight: theme.spacing(1),
      },
    },
    circleFirstSubtitle: {
      marginBottom: theme.spacing(21.25),
      [theme.breakpoints.down('sm')]: {
        marginBottom: 0,
      },
    },
    circleSubtitle: {
      color: '#292929',
    },
    circle: {
      backgroundColor: '#ffffff',
      marginLeft: theme.spacing(4),
      minHeight: 1408,
      minWidth: 1408,
      [theme.breakpoints.down('lg')]: {
        minHeight: 1108,
        minWidth: 1108,
      },
      [theme.breakpoints.down('md')]: {
        minHeight: 908,
        minWidth: 908,
      },
      [theme.breakpoints.down('sm')]: {
        minWidth: 1530,
        minHeight: 1530,
        boxShadow: 'inset 8px 0 16px rgba(0,0,0,0.12)',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#FAFAFA',
        marginLeft: 0,
        padding: theme.spacing(3, 0),
      },
      '& > div': {
        marginLeft: theme.spacing(4),
        backgroundColor: '#FAFAFA',
        boxShadow: 'inset 0 0 10px 4px rgba(0, 0, 0, 0.12)',
        minWidth: 1018,
        minHeight: 1018,
        [theme.breakpoints.down('lg')]: {
          minWidth: 818,
          minHeight: 818,
        },
        [theme.breakpoints.down('md')]: {
          minWidth: 718,
          minHeight: 718,
        },
        [theme.breakpoints.down('sm')]: {
          minWidth: 1020,
          minHeight: 1020,
          flexDirection: 'column',
          margin: 0,
          backgroundColor: '#FAFAFA',
          padding: theme.spacing(3, 0),
          boxShadow: 'inset 0 0 10px 4px rgba(0, 0, 0, 0.12)',
        },
        '& > div': {
          marginLeft: theme.spacing(4),
          backgroundColor: '#F2F0F0',
          boxShadow: 'inset 0 0 10px 4px rgba(0, 0, 0, 0.1)',
          minWidth: 669,
          minHeight: 669,
          justifyContent: 'space-around',
          [theme.breakpoints.down('lg')]: {
            minWidth: 569,
            minHeight: 569,
          },
          [theme.breakpoints.down('md')]: {
            minWidth: 469,
            minHeight: 469,
          },
          [theme.breakpoints.down('sm')]: {
            minWidth: 669,
            minHeight: 669,
            flexDirection: 'column',
            margin: 0,
            boxShadow: 'inset 0 0 10px 4px rgba(0, 0, 0, 0.12)',
            padding: theme.spacing(3, 0),
          },
          '& > div': {
            marginLeft: theme.spacing(5.7),
            [theme.breakpoints.down('sm')]: {
              margin: 0,
              paddingTop: theme.spacing(3),
            },
          },
        },
      },
    },
    contactButton: {
      minWidth: 250,
      minHeight: 250,
      borderRadius: '50%',
      fontWeight: 600,
      fontSize: theme.spacing(2.25),
      boxShadow: '0 0 10px 4px rgba(0, 0, 0, 0.5)',
      [theme.breakpoints.down('lg')]: {
        minWidth: 200,
        minHeight: 200,
      },
      [theme.breakpoints.down('md')]: {
        minWidth: 150,
        minHeight: 150,
      },
      [theme.breakpoints.down('sm')]: {
        minHeight: 250,
        minWidth: 250,
        flexDirection: 'column',
        marginRight: 0,
      },
    },
    pageFooterWrapper: {
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: theme.spacing(12.5),
      marginTop: `-${theme.spacing(31.2)}px`,
      [theme.breakpoints.down('sm')]: {
        marginTop: 0,
      },
    },
    pageFooter: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#000',
      maxWidth: 850,
      padding: theme.spacing(4.2, 3),
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        padding: theme.spacing(11.625, 0),
        backgroundColor: 'transparent',
      },
    },
    footerWrapper: {
      backgroundImage:
        "url('https://deepworkphotos.s3.us-east-2.amazonaws.com/04.0_Contact_Landing+IllustrationBottom2x.png')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      backgroundSize: 'contain',
      [theme.breakpoints.down('sm')]: {
        backgroundSize: 'unset',
      },
    },
    footerImage: {
      marginLeft: `-${theme.spacing(7.5)}px`,
      marginRight: theme.spacing(7.5),
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        marginRight: 0,
      },
    },
    footerContentWrapper: {
      paddingRight: theme.spacing(12.5),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(3),
        backgroundColor: '#000',
      },
    },
    footerContent: {
      lineHeight: 2,
    },
    authorText: {
      fontSize: theme.spacing(1.75),
      lineHeight: 1.714,
      fontWeight: 600,
    },
    authorPosition: {
      fontWeight: 400,
      lineHeight: 1.714,
    },
  })
)
