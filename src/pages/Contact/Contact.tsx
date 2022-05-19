import { FC } from 'react'
import { PageHeader } from '../../components/PageHeader'
import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { CircleIcon } from '../../components/CircleIcon'
import { useStyles } from './styles'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

export const Contact: FC = () => {
  const classes = useStyles()
  return (
    <>
      <Container maxWidth="lg">
        <PageHeader
          title={
            <p>
              We are a <span className={classes.pageHeaderHighlight}>global collective</span> of the best designers who
              have a <span className={classes.pageHeaderHighlight}>shared ownership</span> of the studio. We've raised
              $0 in funding.
            </p>
          }
        />
      </Container>
      <div className={classes.connectWrapper}>
        <Container maxWidth="lg">
          <Grid container className={classes.connectBox}>
            <Grid item xs={12} sm={12} md={5} lg={4}>
              <Box mb={4}>
                <Typography variant="h2" classes={{ root: classes.connectTitle }}>
                  Connect with a Design Director.
                </Typography>
              </Box>
            </Grid>
            <Grid item container xs={12} sm={12} md={4} lg={3} justifyContent="flex-start">
              <Box mr={4}>
                <img
                  width={119}
                  height={119}
                  src="https://deepworkphotos.s3.us-east-2.amazonaws.com/Personnel-images/andrej.png"
                  alt="Design Director"
                />
              </Box>
              <Box>
                <img
                  width={119}
                  height={119}
                  src="https://deepworkphotos.s3.us-east-2.amazonaws.com/Personnel-images/charlie.png"
                  alt="Design Director"
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} className={classes.talkLinkWrap}>
              <a
                className={classes.talkLink}
                href="https://calendly.com/d/cp9-jrc-5g2/deep-work-creative-directors"
                color="primary"
                target="_blank"
                rel="noreferrer">
                <Box>
                  <span>Choose a time to talk to us</span>
                  <CircleIcon>
                    <ChevronRightIcon />
                  </CircleIcon>
                </Box>
              </a>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.footerWrapper}>
        <div className={classes.circleBlockWrap}>
          <div className={classes.circle}>
            <span>
              <Typography variant="h3" className={classes.circleMainTitle}>
                The Deep Work <br />
                Hypersprint <br />
                Design Process
              </Typography>
              <Typography className={classes.circleTitle}>Ideation Workshops</Typography>
              <Typography variant="body2" className={`${classes.circleFirstSubtitle} ${classes.circleSubtitle}`}>
                Align your team and our experts in 3 upfront workshops.
              </Typography>
            </span>
            <div>
              <span>
                <Typography className={classes.circleTitle}>UX &amp; UI Design</Typography>
                <Typography variant="body2" className={classes.circleSubtitle}>
                  Our designers turn your vision into high quality visuals.
                </Typography>
              </span>
              <div>
                <span>
                  <Typography className={classes.circleTitle}>User Research</Typography>
                  <Typography variant="body2" className={classes.circleSubtitle}>
                    We interview your target users to validate product-market fit.
                  </Typography>
                </span>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    classes={{ root: classes.contactButton }}
                    onClick={() =>
                      window.open(
                        'https://docs.deepwork.studio/deep-work-onboarding/deep-work-offering',
                        '_blank'
                      )
                    }>
                    Learn more <KeyboardArrowRightIcon />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.pageFooterWrapper}>
          <div className={classes.pageFooter}>
            <div className={classes.footerImage}>
              <img
                width={255}
                src="https://deepworkphotos.s3.us-east-2.amazonaws.com/Personnel-images/collin.png"
                alt="Collin Myers"
              />
            </div>
            <div className={classes.footerContentWrapper}>
              <Box mb={4.5}>
                <Typography variant="body1" className={classes.footerContent}>
                  <i>
                    "Deep Work allows CodeFi Networks to rapidly release new products disrupting and improving the DeFi
                    ecosystem."
                  </i>
                </Typography>
              </Box>
              <Typography variant="body2">
                <strong className={classes.authorText}>Collin Myers</strong>
              </Typography>
              <Typography variant="body2" className={classes.authorPosition}>
                CodeFi Product Lead, ConsenSys
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
