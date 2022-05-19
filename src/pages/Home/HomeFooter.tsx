import { FC } from 'react'
import { Box, Container, createStyles, Grid, makeStyles } from '@material-ui/core'
import { BraggingItem } from '../../components/BraggingItem'
import { BRAGGING_ITEMS } from '../../data/bragging'
import Gitcoin from '../../assets/partners/Gitcoin.png'
import Edge from '../../assets/partners/Edge & Node.png'
import Ether from '../../assets/partners/Ethereum Foundation.png'
import Bitmap from '../../assets/partners/Bitmap.png'
import dHedge from '../../assets/partners/dHedge.png'
import Pantera from '../../assets/partners/Pantera.png'

const useStyles = makeStyles((theme) =>
  createStyles({
    footer: {
      padding: theme.spacing(2, 0),
      backgroundColor: '#000',
      position: 'absolute',
      bottom: 52,
      left: 0,
      right: 0,
      [theme.breakpoints.down('md')]: {
        position: 'relative',
        bottom: 0,
        backgroundColor: 'transparent',
      },
    },
    partners: {
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        backgroundColor: '#000',
        justifyContent: 'center',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > div': {
          backgroundColor: '#000',
          minWidth: 150,
          minHeight: 100,
          margin: theme.spacing(0.9375),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    },
    braggingWrapper: {
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
        marginBottom: theme.spacing(4),
      },
      [theme.breakpoints.down('sm')]: {
        flexWrap: 'nowrap',
      },
    },
  })
)
export const HomeFooter: FC = () => {
  const classes = useStyles()
  return (
    <Box className={classes.footer}>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between">
          <Grid className={classes.braggingWrapper} container item xs={12} lg={6} justifyContent="flex-start">
            <BraggingItem
              title={`${BRAGGING_ITEMS.projectsComplete.total} projects completed`}
              subtitle={`${BRAGGING_ITEMS.projectsComplete.lastMonth} last month`}
            />
            <BraggingItem
              title={`${BRAGGING_ITEMS.hires.total} active designers`}
              subtitle={`${BRAGGING_ITEMS.hires.lastMonth} hired last month`}
            />
          </Grid>
          <Grid container item xs={12} lg={6} alignItems="center" className={classes.partners}>
            <Box mr={4.125}>
              <img src={Gitcoin} alt="Gitcoin" />
            </Box>
            <Box mr={4.125}>
              <img src={Edge} alt="Edge" />
            </Box>
            <Box mr={4.125}>
              <img src={Ether} alt="Ether" />
            </Box>
            <Box mr={4.125}>
              <img src={Bitmap} alt="Bitmap" />
            </Box>
            <Box mr={4.125}>
              <img src={dHedge} alt="dHedge" />
            </Box>
            <Box mr={4.125}>
              <img src={Pantera} alt="Pantera" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
