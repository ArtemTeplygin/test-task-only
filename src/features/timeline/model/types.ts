export type TimelineEvent = {
  year: number
  text: string
}

export type TimelineSlide = {
  id: string
  leftYear: number
  rightYear: number
  category: string
  events: TimelineEvent[]
}
