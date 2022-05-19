import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footerWrap: {
      backgroundImage: "url('https://deepworkphotos.s3.us-east-2.amazonaws.com/02.0_About+IllustrationBottom2x.png')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      backgroundSize: '100%, 100%',
      [theme.breakpoints.down('md')]: {
        backgroundSize: 'cover',
      },
      position: 'relative',
      '&::before': {
        content: '" "',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        clipPath: 'polygon(50% 150%, 15% 0, 85% 0)',
        backgroundColor: '#000',
        [theme.breakpoints.down('lg')]: {
          clipPath: 'polygon(50% 150%, 0 0, 100% 0)',
        },
        [theme.breakpoints.down('md')]: {
          clipPath: 'polygon(50% 150%, -15% 0, 115% 0)',
        },
        [theme.breakpoints.down('sm')]: {
          clipPath: 'polygon(50% 150%, -30% 0, 130% 0)',
        },
      },
    },
    footerBox: {
      backgroundColor: 'transparent',
      zIndex: 100,
      color: '#fff',
      overflow: 'hidden',
      padding: '0 15px',
    },
    calculateButton: {
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
        textTransform: 'unset',
        fontWeight: 600,
        fontSize: theme.spacing(2.25),
      },
    },
    darkBackground: {
      background: '#000',
      color: '#fff',
    },
    mobileDisclaimer: {
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
  })
)
