export interface Item {
  id: number
  title: string
  description: string
  awarded_value: string
  awarded_currency: string
  deadline_date: string
  place: string
}

export type ApiResult<T> = {
  data: T | null
  error: string | null
}

export interface ApiResponse {
  data: Item[]
  count: number
  next: string | null
  previous: string | null
}
