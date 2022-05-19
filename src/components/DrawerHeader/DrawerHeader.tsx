import { Box, createStyles, IconButton, makeStyles, Theme } from '@material-ui/core'
import { RoutePaths } from '../../routePaths'
import DarkLogo from '../../assets/DarkLogo.png'
import Logo from '../../assets/logo.png'
import { Close } from '../../shared/icons/close'
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mobileNavCloseButton: {
      position: 'absolute',
      top: 24,
      left: 15,
      right: 15,
      display: 'flex',
      justifyContent: 'space-between',
    },
    mobileLogo: {
      display: 'none',
      [theme.breakpoints.down('md')]: {
        display: 'block',
      },
    },
    darkIcon: {
      color: '#000',
    },
    lightIcon: {
      '& path': {
        fill: '#fff',
      },
    },
  })
)
interface Props {
  handleClose: () => void
  isDark?: boolean
}

export const DrawerHeader: FC<Props> = ({ handleClose, isDark }) => {
  const classes = useStyles()
  const history = useHistory()

  const handleGoHome = (path: RoutePaths) => () => {
    history.push(path)
    handleClose()
  }

  return (
    <Box className={classes.mobileNavCloseButton}>
      <Box className={classes.mobileLogo} onClick={handleGoHome(RoutePaths.home)}>
        {isDark && <img width={117} height={50} src={DarkLogo} alt="Deep work" />}
        {!isDark && <img width={117} height={50} src={Logo} alt="Deep work" />}
      </Box>
      <IconButton className={isDark ? classes.darkIcon : classes.lightIcon} onClick={handleClose}>
        <Close />
      </IconButton>
    </Box>
  )
}
