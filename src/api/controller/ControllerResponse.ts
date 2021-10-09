export type ControllerResponse<T> = {
  status: number
  resource: T | T[]
}
