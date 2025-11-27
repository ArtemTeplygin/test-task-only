export type TimelineEvent = {
  year: string
  text: string
}

export type TimelineSlide = {
  id: string
  leftYear: number
  rightYear: number
  category: string
  events: TimelineEvent[]
}
