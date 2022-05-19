export interface ITestimonials {
  feedback: IFeedback
  motivation: Motivation
}

export interface IFeedback {
  message: string
  author: string
  position: string
  image: string
}

export interface Motivation {
  title: string
  message: string[]
  link?: {
    url: string
    label: string
  }
}
