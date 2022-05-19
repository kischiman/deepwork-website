import { FC, useState } from 'react'
import { PageHeader } from '../../components/PageHeader'
import { CompensationCalculator } from './components/CompensationCalculator'
import { Testimonials } from './components/Testimonials'
import { TESTIMONIALS } from '../../data/testimonials'
import { Box, Button, Container, Drawer, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { DrawerHeader } from '../../components/DrawerHeader'
import { useStyles } from './styles'

export const AboutUs: FC = () => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const handleToggleCalculatorDrawer = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <>
      <Container maxWidth="lg">
        <PageHeader
          title={
            <>
              Impactful projects,
              <br /> inspiring people &<br /> long-term compensation.
            </>
          }
          subtitle={
            <>
              Deep Work is a collective made of some of the world’s best designers who all have a shared ownership of
              the studio. By joining Deep Work you can access the most exciting diverse teams.
            </>
          }
        />
      </Container>
      <Container maxWidth="xl">
        <Box className={classes.mobileDisclaimer}>
          <Box mt={3} mb={4}>
            <Typography variant="body2">
              Deep Work aims to use blockchain token economics and DAO inspiration to transition to a collective. With
              everyone that inputs into the success and creation receiving a share of the value and rewards. The
              intention is distribute something similar to startup equity beyond founders, employees and investors.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              The goal is to create a successful design studio as a collective - rather than a traditional exit (e.g.
              selling the business or going public) we will <strong>‘exit to the community’</strong>.
            </Typography>
          </Box>
        </Box>
        {!matches && <CompensationCalculator />}
        <Box mt={3}>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            onClick={handleToggleCalculatorDrawer}
            className={classes.calculateButton}>
            <span>Calculate your potential earnings</span>
            <ExpandMoreIcon />
          </Button>
        </Box>
        <Drawer
          anchor="right"
          open={isOpen}
          classes={{ paper: classes.darkBackground }}
          onClose={handleToggleCalculatorDrawer}>
          <DrawerHeader handleClose={handleToggleCalculatorDrawer} />
          <Box mt={12.125} px={3}>
            <CompensationCalculator />
          </Box>
        </Drawer>
        <Testimonials data={TESTIMONIALS} />
      </Container>
      <footer className={classes.footerWrap}>
        <Box display="flex" justifyContent="center">
          <Box maxWidth={630} textAlign="center" className={classes.footerBox}>
            <Box mb={12}>
              <Typography variant="h2">
                Become part of Deep Work <br /> at any skill level
              </Typography>
            </Box>
            <Box mb={12}>
              <Typography variant="body1">Join the community on Discord, help out and shadow on projects</Typography>
            </Box>
            <Box mb={12}>
              <Typography variant="body1">Learn by supporting a design expert on a client project</Typography>
            </Box>
            <Box mb={12}>
              <Typography variant="body1">Become an attested design expert</Typography>
            </Box>
            <Box mb={12} display="flex" justifyContent="center">
              <Box maxWidth={190}>
                <Typography variant="body1">Lead projects as a Design Director</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </footer>
    </>
  )
}
