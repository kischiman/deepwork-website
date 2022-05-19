import { CaseStudyType } from '../../shared/enums/caseStudies'

export interface ICaseStudy {
  id: string
  type: CaseStudyType | CaseStudyType[]
  title: string
  mainImage: string
  details?: CaseStudyDetails
  description?: string
  slug?: string
  bottomLinks?: CaseStudyBottomLink[]
}

export interface CaseStudyBottomLink {
  url?: string
  title: string
  type?: 'text' | 'outlined' | 'contained'
}

export interface CaseStudyDetails {
  description: string
  talkingPoints: ITalkingPoint[]
}

export interface ITalkingPoint {
  label: string
  description: string
  image?: string
  links?: TalkingPointLink[]
}

export interface TalkingPointLink {
  label: string
  url: string
}
