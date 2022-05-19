import { createTheme } from '@material-ui/core'

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1440,
    },
  },
  overrides: {
    MuiDivider: {
      root: {
        backgroundColor: '#ccc',
      },
    },
    MuiTypography: {
      h1: {
        fontFamily: 'IBM Plex Sans',
        fontSize: 72,
        fontWeight: 400,
        lineHeight: 1.333,
      },
      h2: {
        fontFamily: 'IBM Plex Sans',
        fontSize: 48,
        letterSpacing: 1.167,
        fontWeight: 500,
      },
      h3: {
        fontFamily: 'IBM Plex Sans',
        fontSize: 32,
        fontWeight: 500,
        lineHeight: 1,
        letterSpacing: 1.75,
      },
      h4: {
        fontSize: 24,
        lineHeight: 1,
        letterSpacing: 1.6,
        fontFamily: 'IBM Plex Sans',
      },
      h5: {
        fontSize: 24,
        lineHeight: 1.5,
        fontWeight: 600,
        fontFamily: 'IBM Plex Sans',
      },
      body1: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        lineHeight: 1.778,
      },
      body2: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        lineHeight: 1.5,
      },
      caption: {
        fontFamily: 'IBM Plex Sans',
        fontSize: 12,
        lineHeight: 1.667,
        letterSpacing: 1,
        fontWeight: 400,
      },
      subtitle1: {
        fontFamily: 'Montserrat',
        fontSize: 20,
        fontWeight: 300,
        lineHeight: 1.6,
      },
    },
    MuiLink: {
      root: {
        cursor: 'pointer',
        fontSize: 18,
        lineHeight: 1.333,
        fontWeight: 600,
        fontFamily: 'IBM Plex Sans',
      },
    },
    MuiButton: {
      root: {
        color: '#fff',
        borderRadius: 0,
        fontFamily: 'IBM Plex Sans',
        fontWeight: 400,
        lineHeight: 1.333,
      },
      label: {
        display: 'flex',
        alignItems: 'center',
      },
      containedPrimary: {
        color: '#000',
        textTransform: 'none',
      },
    },
  },
  palette: {
    primary: {
      main: '#FF0088',
    },
  },
})
