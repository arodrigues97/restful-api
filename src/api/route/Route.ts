import { Controller } from "../controller/Controller"
import { RouteHttpType } from "./RouteHttpType"


export abstract class Route<T> {
    readonly route: string
    readonly methods: RouteHttpType[]
    controller: Controller<T>
    constructor(route: string, httpMethods: RouteHttpType[]) {
        this.route = route
        this.methods = httpMethods
    }

}