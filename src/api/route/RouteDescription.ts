import { Controller } from "../controller/Controller";
import { RouteHttpType } from "./RouteHttpType";

export interface RouteDescription {
    route: string
    include?: RouteHttpType[]
    exclude?: RouteHttpType[]
}
