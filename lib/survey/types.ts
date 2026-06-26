export type SurveyOption = {
  text: string
  type: string
  weight: number
}

export type SurveyQuestion = {
  id: number
  question: string
  options: SurveyOption[]
}
