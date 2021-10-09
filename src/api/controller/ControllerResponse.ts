export type ControllerResponse<T> = {
  status: number
  message?: string
  resource?: T | T[]
}
