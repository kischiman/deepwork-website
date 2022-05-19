export enum SkillsEnum {
  designer = 'designer',
  facilitator = 'facilitator',
  researcher = 'researcher',
}

export enum ExperienceEnum {
  enthusiast = 'enthusiast',
  completedPaidProject = 'completedPaidProject',
  canLead = 'canLead',
}

export enum MentoringEnum {
  yes = 'yes',
  no = 'no',
}

export enum SkillValue {
  designer = 700,
  facilitator = 750,
  researcher = 520,
}

export enum AvailabilityMultiplier {
  designer = 1,
  facilitator = 1,
  researcher = 1,
}

export enum EnthusiasticSkillMultiplier {
  designer = 0.245,
  facilitator = 0.245,
  researcher = 0.245,
}
export enum PaidProjectWorkSkillMultiplier {
  designer = 1,
  facilitator = 1,
  researcher = 1,
}
export enum CanLeadAProjectSkillMultiplier {
  designer = 1.2,
  facilitator = 1.2,
  researcher = 1.2,
}

export const SkillsExperienceEnum = {
  [ExperienceEnum.enthusiast]: EnthusiasticSkillMultiplier,
  [ExperienceEnum.completedPaidProject]: PaidProjectWorkSkillMultiplier,
  [ExperienceEnum.canLead]: CanLeadAProjectSkillMultiplier,
}

export enum MentoringYesSkillMultiplier {
  designer = 1.2,
  facilitator = 1.2,
  researcher = 1.2,
}
export enum MentoringNoSkillMultiplier {
  designer = 1,
  facilitator = 1,
  researcher = 1,
}
export enum ProfitShareBySkillEnum {
  designer = 0.005,
  facilitator = 0.005,
  researcher = 0.005,
}
export const MentoringMap = {
  [MentoringEnum.yes]: MentoringYesSkillMultiplier,
  [MentoringEnum.no]: MentoringNoSkillMultiplier,
}
