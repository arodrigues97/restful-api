import { Controller } from "../controller/Controller"
import { HttpMethod } from "./HttpMethod"

export interface RouteDescription {
  route: string
  include?: HttpMethod[]
  exclude?: HttpMethod[]
  controller?: Controller<any>
}
