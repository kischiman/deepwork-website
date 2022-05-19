import { ChangeEvent, FC, ReactElement, useEffect, useState } from 'react'
import {
  Box,
  Button,
  createStyles,
  FormControlLabel,
  Grid,
  Link,
  makeStyles,
  Radio,
  RadioGroup,
  Slider,
  Switch,
  Theme,
  Typography,
} from '@material-ui/core'
import { ExperienceEnum, MentoringEnum, SkillsEnum } from './enums'
import { calculateProfitShare, calculateProjectFees } from './utils'
import { Pensil } from '../../../../shared/icons/pensil'
import { Group } from '../../../../shared/icons/group'
import { Search } from '../../../../shared/icons/search'
import { SkillsLabel } from './SkillsLabel'
import { useStyles } from './styles'
import HelpIcon from '@material-ui/icons/Help'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { Tooltip } from '../../../../components/Tooltip'

const getValueText = (value: number) => `${value} Day${value === 1 ? '' : 's'}`

export const CompensationCalculator: FC = () => {
  const classes = useStyles()
  const [skill, setSkill] = useState<SkillsEnum>(SkillsEnum.designer)
  const [experience, setExperience] = useState<ExperienceEnum>(ExperienceEnum.enthusiast)
  const [availability, setAvailability] = useState<number>(12)
  const [mentoring, setMentoring] = useState<MentoringEnum>(MentoringEnum.no)

  const [projectFees, setProjectFees] = useState<number>(0)
  const [profitShare, setProfitShare] = useState<number>(0)
  const [completedProjects, setCompletedProjects] = useState<number>(4)

  const handleAddCompletedProjects = () => setCompletedProjects((prev) => prev + 1)

  const handleRemoveCompletedProjects = () =>
    setCompletedProjects((prev) => {
      const updatedCompletedProject = prev - 1
      return updatedCompletedProject !== 0 ? updatedCompletedProject : 1
    })

  const handleMentoringChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMentoring(event.target.checked ? MentoringEnum.yes : MentoringEnum.no)
  }

  const handleChange = (event: any, newValue: number | number[]) => {
    if (!Array.isArray(newValue)) {
      setAvailability(newValue)
    }
  }

  const handleSelectedSkillChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSkill((event.target as HTMLInputElement).value as SkillsEnum)
  }
  const handleSelectedExperienceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setExperience((event.target as HTMLInputElement).value as ExperienceEnum)
  }

  useEffect(() => {
    const calculatedProjectFees = calculateProjectFees({ skill, experience, mentoring, availability })
    const calculatedProfitShare = calculateProfitShare(calculatedProjectFees, skill, completedProjects)
    setProjectFees(Math.round(calculatedProjectFees))
    setProfitShare(Math.round(calculatedProfitShare))
  }, [skill, experience, availability, mentoring, completedProjects])

  return (
    <div>
      <Box className={classes.calculatorTitle}>
        <Typography variant="h3">Financial & equity style compensation</Typography>
      </Box>
      <Grid container spacing={8}>
        <Grid item xs={12} md={6}>
          <Box pt={4} mb={5.6}>
            <Box mb={4.8}>
              <Box display="flex" alignItems="center">
                <strong className={classes.sectionLabel}>What is your main skill?</strong>
                <Box ml={1} display="flex">
                  <Tooltip
                    classes={{ tooltip: classes.tooltipRoot }}
                    title="Deep Work currently offers work for workshop facilitators, product designers and user researchers. To see more details about the specific tasks and responsibilities, please refer to our knowledge base."
                    placement="top">
                    <HelpIcon />
                  </Tooltip>
                </Box>
              </Box>
            </Box>
            <RadioGroup aria-label="skills" name="skills" value={skill} onChange={handleSelectedSkillChange}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <FormControlLabel
                    classes={{ root: classes.controlLabel }}
                    value={SkillsEnum.designer}
                    control={<Radio />}
                    label={
                      <SkillsLabel active={SkillsEnum.designer === skill} Icon={<Pensil />} label="Product Designer" />
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControlLabel
                    classes={{ root: classes.controlLabel }}
                    value={SkillsEnum.facilitator}
                    control={<Radio />}
                    label={
                      <SkillsLabel
                        active={SkillsEnum.facilitator === skill}
                        Icon={<Group />}
                        label="WORKSHOP FACILITATOR"
                      />
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControlLabel
                    classes={{ root: classes.controlLabel }}
                    value={SkillsEnum.researcher}
                    control={<Radio />}
                    label={
                      <SkillsLabel active={SkillsEnum.researcher === skill} Icon={<Search />} label="USER RESEARCHER" />
                    }
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </Box>
          <div>
            <Box mb={4.8}>
              <Box display="flex" alignItems="center">
                <strong className={classes.sectionLabel}>What’s your availability next month?</strong>
              </Box>
            </Box>
            <Box mb={5.5} pr={3}>
              <Slider
                classes={{
                  markLabel: classes.sliderMarkLabel,
                  thumb: classes.sliderMarkActive,
                  active: classes.sliderActive,
                }}
                defaultValue={14}
                min={1}
                max={28}
                getAriaValueText={getValueText}
                step={1}
                ValueLabelComponent={ValueLabelComponent}
                onChange={handleChange}
                valueLabelDisplay="auto"
                marks={[
                  {
                    value: 1,
                    label: '1 Day',
                  },
                  {
                    value: 28,
                    label: '28 days',
                  },
                ]}
              />
            </Box>
          </div>
          <Box mb={2.8}>
            <Box mb={3.8}>
              <Box display="flex" alignItems="center">
                <strong className={classes.sectionLabel}>What is your experience?</strong>
              </Box>
            </Box>
            <RadioGroup
              aria-label="experience"
              name="experience"
              value={experience}
              onChange={handleSelectedExperienceChange}>
              <Box className={classes.controlBlockWrapper}>
                <Box
                  className={`${classes.controlBlock} ${
                    ExperienceEnum.enthusiast === experience ? classes.activeLabel : ''
                  }`}>
                  <label htmlFor="entusiastic">Just enthusiastic</label>
                  <Radio id="entusiastic" value={ExperienceEnum.enthusiast} />
                </Box>
                <Box
                  className={`${classes.controlBlock} ${
                    ExperienceEnum.completedPaidProject === experience ? classes.activeLabel : ''
                  } ${classes.secondControlBlock}`}>
                  <label htmlFor="completedProject">Completed paid project work</label>
                  <Radio id="completedProject" value={ExperienceEnum.completedPaidProject} />
                </Box>
                <Box
                  className={`${classes.controlBlock} ${
                    ExperienceEnum.canLead === experience ? classes.activeLabel : ''
                  } ${classes.thirdControlBlock}`}>
                  <label htmlFor="canLead">Can lead a project team</label>
                  <Radio id="canLead" value={ExperienceEnum.canLead} />
                </Box>
              </Box>
            </RadioGroup>
          </Box>
          <Box className={classes.mentoringWrap}>
            <Box ml={2}>
              <label htmlFor="interestedInMentoring">Interested in mentoring</label>
            </Box>
            <Switch
              disabled={experience !== ExperienceEnum.canLead}
              id="interestedInMentoring"
              checked={mentoring === MentoringEnum.yes}
              onChange={handleMentoringChange}
              classes={{
                root: classes.switchRoot,
                switchBase: classes.switchBase,
                checked: classes.switchChecked,
                thumb: classes.switchThumb,
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className={classes.resultsBox}>
          <Box className={classes.resultsBoxTitle}>
            <Typography variant="h5">Your projected earnings next month: </Typography>
          </Box>
          <Box className={classes.projectEarningsWrap}>
            <Box className={classes.projectFees}>
              <Box mb={1}>
                <span className={classes.calcFeesLabel}>Project fees</span>
              </Box>
              <Box mb={2}>
                <span className={classes.calcFeesPrice}>
                  <strong>${projectFees}</strong>
                </span>
              </Box>
              <Typography variant="body2">4-hour working days</Typography>
              <Typography variant="body2">no admin task</Typography>
              <Typography variant="body2">work from anywhere</Typography>
            </Box>
            <Box className={classes.profitShares}>
              <Box mb={1} display="flex" justifyContent="space-between">
                <span className={classes.calcFeesLabel}>Profit share compensation:</span>
                <Box ml={1} display="flex">
                  <Tooltip
                    classes={{ tooltip: classes.tooltipRoot }}
                    title={
                      <>
                        <p>
                          Given your current input, your share would equal ${profitShare} every month regardless of your
                          contribution, assuming the total profit share remains constant.
                        </p>
                        <br />
                        <p>
                          It will increase or decrease, depending on how much time you dedicate to projects and the
                          development of Deep Work.
                        </p>
                        <br />
                        <p>
                          Currently, Deep Work shares 10% of profits, which we plan to increase in the future - See our
                          <Link> Financial Roadmap and conditions.</Link>
                        </p>
                      </>
                    }
                    placement="top">
                    <HelpIcon />
                  </Tooltip>
                </Box>
              </Box>
              <Box display="flex" mb={2} alignItems="flex-start">
                <p className={classes.calcFeesPrice}>
                  <strong className={classes.profitPlus}>+</strong>
                  <strong>${profitShare}</strong>
                </p>
                <p className={classes.monthBox}>/month</p>
              </Box>
              <Box mb={1.1}>
                <Box display="flex">
                  <Box>
                    <Typography variant="body2">If Deep Work completes projects.</Typography>
                  </Box>
                  <Box display="flex" alignItems="flex-start">
                    <Box display="flex" className={classes.completedProjectBox}>
                      <button onClick={handleRemoveCompletedProjects}>-</button>
                      <span>{completedProjects}</span>
                      <button onClick={handleAddCompletedProjects}>+</button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box>
                <p className={classes.calcProjectsText}>Projects completed last month: 3</p>
              </Box>
              <Box>
                <p className={classes.calcProjectsText}>Projects completed 2 months ago: 4</p>
              </Box>
            </Box>
          </Box>
          <Box mt={3.625} className={classes.disclaimer}>
            <p>Deep Work distributes monthly profits among the team.</p>
            <p>
              See our{' '}
              <Link classes={{ root: classes.disclaimer }} href="#">
                Financial Roadmap and conditions.
              </Link>
            </p>
          </Box>
          <Box mt={7.5}>
            <Button
              className={classes.getStartedButton}
              variant="contained"
              size="large"
              color="primary"
              onClick={() => window.open('https://docs.deepwork.studio/how-we-work/quick-start-guide', '_blank')}>
              Get started with Deep Work <ChevronRightIcon />
            </Button>
          </Box>
        </Grid>
      </Grid>
      {ExperienceEnum.canLead !== experience && (
        <Box mt={2}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={12} lg={6}>
              <Box display="flex" alignItems="center" justifyContent="center" className={classes.calculatorInfoBlock}>
                <Box display="flex" flexDirection="column" className={classes.letterBlock}>
                  <div className={classes.infoTop} />
                  <div className={classes.calculatorInfoBottom} />
                </Box>
                <div className={classes.infoBoxText}>
                  <Box mb={1.2}>
                    <p>
                      The estimated earnings below can vary and depend on the speed of your personal progression and
                      ability to improve.
                    </p>
                  </Box>
                  <Box>
                    <p>Lower skill levels may experience a delay before starting on a project.</p>
                  </Box>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  )
}

interface Props {
  children: ReactElement
  open: boolean
  value: number
}

export const useTooltipStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'black',
      color: theme.palette.primary.main,
      // padding: theme.spacing(0, 4.375),
      textAlign: 'center',
      fontSize: theme.spacing( 1.75 ),
      width: '60px',
      fontFamily: 'IBM Plex Sans',
      margin: 0,
      lineHeight: 1.5,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
  })
)
function ValueLabelComponent(props: Props) {
  const classes = useTooltipStyles()
  const { children, value } = props

  return (
    <Tooltip
      classes={{ tooltip: classes.root }}
      open
      enterTouchDelay={0}
      placement="bottom"
      title={getValueText(value)}>
      {children}
    </Tooltip>
  )
}
