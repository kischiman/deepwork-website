import {
  AvailabilityMultiplier,
  ExperienceEnum,
  MentoringEnum,
  MentoringMap,
  ProfitShareBySkillEnum,
  SkillsEnum,
  SkillsExperienceEnum,
  SkillValue,
} from './enums'

interface Props {
  skill: SkillsEnum
  experience: ExperienceEnum
  availability: number
  mentoring: MentoringEnum
}
export const calculateProjectFees = ({ experience, availability, mentoring, skill }: Props): number =>
  SkillValue[skill] *
  availability *
  AvailabilityMultiplier[skill] *
  SkillsExperienceEnum[experience][skill] *
  MentoringMap[mentoring][skill]

export const calculateProfitShare = (projectFees: number, skill: SkillsEnum, completedProjects: number): number =>
  projectFees * ProfitShareBySkillEnum[skill] * completedProjects
