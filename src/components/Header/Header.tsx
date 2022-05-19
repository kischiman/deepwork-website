import React, { FC, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { RoutePaths } from '../../routePaths'
import Logo from '../../assets/logo.png'
import { AppBar, Box, Button, createStyles, IconButton, makeStyles, Popover, Theme, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { DrawerHeader } from '../DrawerHeader'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: 'transparent',
      padding: theme.spacing(7.5, 4.3),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(3.75, 2.5),
      },
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    mobileLink: {
      letterSpacing: '2.86px',
      color: '#292929',
      marginBottom: theme.spacing(2.5),
      fontSize: theme.spacing(2.5),
    },
    navLink: {
      fontFamily: 'IBM Plex Sans',
      lineHeight: 1.5,
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    active: {
      color: theme.palette.primary.main,
    },
    mobileNavRoot: {
      minWidth: 306,
      minHeight: 339,
      padding: theme.spacing(5, 4.125),
      boxShadow: 'inset 0px 0px 20px 10px #FAFAFA',
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.only('xs')]: {
        top: '0!important',
        left: '0!important',
        right: 0,
        bottom: 0,
        padding: theme.spacing(15.375, 8.125, 7.5, 8.125),
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  })
)

export const Header: FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuOpen = (event: React.SyntheticEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleGoHome = (path: RoutePaths) => () => {
    history.push(path)
    handleMobileMenuClose()
  }
  const mobileMenuId = 'mobile-menu-id'

  const renderMobileMenu = (
    <Popover
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
      id={mobileMenuId}
      keepMounted
      classes={{ paper: classes.mobileNavRoot }}
      transformOrigin={{ vertical: 'center', horizontal: 'center' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <DrawerHeader handleClose={handleMobileMenuClose} />
      <Box display="flex" flexDirection="column" mt={2}>
        <Box minHeight="100%" display="flex" flexDirection="column" alignItems="flex-start">
          <Button
            variant="text"
            classes={{ root: classes.mobileLink }}
            className={location.pathname === RoutePaths.caseStudies ? classes.active : ''}
            onClick={handleGoHome(RoutePaths.caseStudies)}>
            <strong>Case Studies</strong>
          </Button>
          <Button
            variant="text"
            classes={{ root: classes.mobileLink }}
            className={location.pathname === RoutePaths.aboutUs ? classes.active : ''}
            onClick={handleGoHome(RoutePaths.aboutUs)}>
            <strong>About Us</strong>
          </Button>
          <Button
            variant="text"
            classes={{ root: classes.mobileLink }}
            className={location.pathname === RoutePaths.articles ? classes.active : ''}
            onClick={handleGoHome(RoutePaths.articles)}>
            <strong>Articles</strong>
          </Button>
          <Button
            variant="text"
            classes={{ root: classes.mobileLink }}
            onClick={() => window.open('https://docs.deepwork.studio/#get-started', '_blank')}>
            <strong>Knowledge Base</strong>
          </Button>
        </Box>
        <Box mt={2.5}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={location.pathname === RoutePaths.contact ? classes.active : ''}
            onClick={handleGoHome(RoutePaths.contact)}>
            <Box display="flex" alignItems="center">
              <strong>Contact</strong> <KeyboardArrowRightIcon />
            </Box>
          </Button>
        </Box>
      </Box>
    </Popover>
  )

  return (
    <AppBar position="static" classes={{ root: classes.appBar }} elevation={0}>
      <Toolbar classes={{ root: classes.toolbar }}>
        <Box onClick={handleGoHome(RoutePaths.home)}>
          <img width={117} height={50} src={Logo} alt="Deep work" />
        </Box>
        <nav className={classes.sectionDesktop}>
          <Button
            classes={{ root: classes.navLink }}
            className={location.pathname.includes(RoutePaths.caseStudies) ? classes.active : ''}
            onClick={handleGoHome(RoutePaths.caseStudies)}>
            <strong>Case Studies</strong>
          </Button>
          <Button
            classes={{ root: classes.navLink }}
            className={location.pathname.includes(RoutePaths.aboutUs) ? classes.active : ''}
            onClick={handleGoHome(RoutePaths.aboutUs)}>
            <strong>About Us</strong>
          </Button>
          <Button
            classes={{ root: classes.navLink }}
            className={location.pathname.includes(RoutePaths.articles) ? classes.active : ''}
            onClick={handleGoHome(RoutePaths.articles)}>
            <strong>Articles</strong>
          </Button>
          <Button
            classes={{ root: classes.navLink }}
            href={'https://docs.deepwork.studio'}
            target="_blank"
            rel="noreferrer">
            <strong>Knowledge Base</strong>
          </Button>
          <Button
            classes={{ root: classes.navLink }}
            className={location.pathname.includes(RoutePaths.contact) ? classes.active : ''}
            onClick={handleGoHome(RoutePaths.contact)}>
            <strong>Contact</strong>
          </Button>
        </nav>
        <div className={classes.sectionMobile}>
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit">
            <MenuIcon />
          </IconButton>
        </div>
        {renderMobileMenu}
      </Toolbar>
    </AppBar>
  )
}
