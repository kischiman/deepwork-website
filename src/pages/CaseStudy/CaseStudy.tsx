import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { ICaseStudy } from '../CaseStudies/interfaces'
import { Box, Button, Container, Grid, Link, Typography } from '@material-ui/core'
import { PageHeader } from '../../components/PageHeader'
import { CASE_STUDIES } from '../../data/case-studies'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { CircleIcon } from '../../components/CircleIcon'
import { RoutePaths } from '../../routePaths'
import { useHistory } from 'react-router-dom'
import { TalkingPoint } from './components'
import { useStyles, AccordionDetails, AccordionSummary, Accordion } from './styles'
import { CaseStudyTypeStyled } from '../../components/CaseStudyTypeStyled'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

export const CaseStudy: FC = () => {
  const history = useHistory()
  const [expanded, setExpanded] = useState<string | false>()
  const params: { slug: string } = useParams()
  const [caseStudy, setCaseStudy] = useState<ICaseStudy | null>(null)
  const [nextStudy, setNextStudy] = useState<ICaseStudy | null>(null)
  const [listLabels, setListLabels] = useState<string[]>([])
  const [scrollToItem, setScrollToItem] = useState<number | null>(null)
  const talkingPointsRef = useRef<any>([])
  const contentRef = useRef<HTMLDivElement>(null)
  const [activeItem, setActiveItem] = useState('')
  const classes = useStyles()

  useEffect(() => {
    setActiveItem(listLabels[0])
  }, [listLabels])

  useEffect(() => {
    setListLabels(caseStudy?.details?.talkingPoints.map((item) => item.label) ?? [])
  }, [caseStudy?.details?.talkingPoints])

  useEffect(() => {
    if (params.slug) {
      const foundIndex = CASE_STUDIES.findIndex((item) => item.slug === decodeURIComponent(params.slug))
      const found = CASE_STUDIES[foundIndex]
      if (found) {
        let filteredTalkingPoints = found.details?.talkingPoints.filter(
          (tp) => !(tp.label.toLowerCase() === 'additional files' && !tp.links?.some((link) => Boolean(link.label)))
        )
        setCaseStudy({
          ...found,
          details: { description: found.details?.description || '', talkingPoints: filteredTalkingPoints || [] },
        })
      }
      const nextStudy = CASE_STUDIES.length === foundIndex + 1 ? CASE_STUDIES[0] : CASE_STUDIES[foundIndex + 1]
      setNextStudy(nextStudy)
    }
  }, [params.slug])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // @ts-ignore
          const id = entry.target.dataset['id']
          if (!entry.target.parentElement?.dataset['id']) {
            return
          }
          if (entry.isIntersecting) {
            setActiveItem(id)
          } else {
            // @ts-ignore
            const siblingId = entry.target.previousElementSibling?.dataset['id']
            setActiveItem((prev) => (siblingId && entry.isIntersecting ? siblingId : prev))
          }
        })
      },
      { threshold: 0.5 }
    )
    talkingPointsRef.current = observer
  }, [])

  const handleClickListItem = (index: any) => () => {
    setScrollToItem(index)
  }

  const handleNextClick = () => {
    nextStudy?.slug && history.push(RoutePaths.caseStudy.replace(':slug', nextStudy?.slug))
  }

  const handleScroll = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleChange = (panel: string) => (event: ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div className={classes.caseStudyWrapper}>
      <Container maxWidth="lg">
        <PageHeader
          title={caseStudy?.title}
          preffix={caseStudy?.type ? <CaseStudyTypeStyled type={caseStudy?.type} /> : ''}
          subtitle={<>{caseStudy?.description}</>}
          buttons={caseStudy?.bottomLinks?.map((item) => ({
            title: item.title,
            link: item.url,
            type: item.type,
            icon: <KeyboardArrowDownIcon />,
            onClick: !item.url ? handleScroll : null,
          }))}
        />
      </Container>
      <Container ref={contentRef} maxWidth={false} className={classes.mainImageWrapper}>
        <Box position="relative" zIndex={999}>
          <img src={caseStudy?.mainImage} alt={caseStudy?.title} className={classes.mainImage} />
        </Box>
        <div className={classes.withBackgroundImage} />
      </Container>
      <Container maxWidth="xl" className={classes.contentWrapper}>
        <Grid container className={classes.verticalDivider}>
          <Grid container justifyContent="space-between" className={classes.desktopTalkingPointsWrapper}>
            <Grid item sm={5} md={4} className={classes.leftGrid}>
              <div className={classes.listWrapper}>
                <Box className={classes.list} display="flex" flexDirection="column" alignItems="flex-start">
                  {listLabels?.map((item, index) => (
                    <Button
                      key={index}
                      className={`${classes.listItem} ${activeItem === item ? classes.activeListItem : ''}`}
                      onClick={handleClickListItem(index)}>
                      {item}
                    </Button>
                  ))}
                </Box>
              </div>
            </Grid>
            <Grid container item xs={12} sm={12} md={8} justifyContent="flex-end">
              <Grid item xs={12} sm={12} data-id="talkingPointBox">
                <Box className={classes.caseStudyDescription}>
                  <Typography variant="body1">{caseStudy?.details?.description}</Typography>
                </Box>
                {caseStudy?.details?.talkingPoints.map((talkingPoint, index) => (
                  <TalkingPoint
                    key={index}
                    observer={talkingPointsRef.current}
                    scrollToItem={scrollToItem !== null && scrollToItem === index}
                    talkingPoint={talkingPoint}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Box className={classes.mobileTalkingPointsWrapper}>
            <Box className={classes.caseStudyDescription}>
              <Typography variant="body1">{caseStudy?.details?.description}</Typography>
            </Box>
            {listLabels?.map((item, index) => (
              <Accordion key={index} square expanded={expanded === item} onChange={handleChange(item)}>
                <AccordionSummary>
                  <Typography>
                    <strong>{item}</strong>
                  </Typography>
                  <Box ml={1.5}>{expanded === item ? <ExpandLessIcon /> : <ExpandMoreIcon />}</Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box className={classes.mobileCaseStudyDescription}>
                    {caseStudy?.details?.talkingPoints[index] && (
                      <TalkingPoint
                        observer={talkingPointsRef.current}
                        scrollToItem={scrollToItem !== null && scrollToItem === index}
                        talkingPoint={caseStudy?.details?.talkingPoints[index]}
                      />
                    )}
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
          <Box display="flex" mt={10} pb={10}>
            <Grid container justifyContent="flex-end">
              <Grid container item xs={12} sm={11} alignItems="center">
                <Grid item xs={12} sm={8} className={classes.nextImage}>
                  <Box component="figure" mr={7.5}>
                    <img src={nextStudy?.mainImage} alt={nextStudy?.title} className="img-responsive" />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <Box mb={3}>
                    <Link onClick={handleNextClick} className={classes.nextLink}>
                      <strong>Next Project</strong>
                      <CircleIcon>
                        <ChevronRightIcon />
                      </CircleIcon>
                    </Link>
                  </Box>
                  <Box>
                    <Box mb={1}>{caseStudy?.type ? <CaseStudyTypeStyled type={caseStudy?.type} /> : ''}</Box>
                    <Box mb={1.4}>
                      <Typography variant="h5">{nextStudy?.title}</Typography>
                    </Box>
                    <Typography variant="body2" className={classes.nextStudyDescription}>
                      {nextStudy?.description}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </div>
  )
}
