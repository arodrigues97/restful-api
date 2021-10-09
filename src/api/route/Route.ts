import { Resource } from "./../resource/Resource"
import { HttpMethod } from "./HttpMethod"
import { Controller } from "../controller/Controller"

export abstract class Route {
  readonly route: string
  readonly methods: HttpMethod[]
  controller: Controller<any>
  constructor(route: string, httpMethods: HttpMethod[]) {
    this.route = route
    this.methods = httpMethods
  }
}
