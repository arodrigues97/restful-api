import { Resource } from "./Resource";

export type RequestShape = {
    id: string
    firstName: string
    lastName: string
}

export class Request extends Resource implements RequestShape {
    id: string
    firstName: string
    lastName: string
    fullName:string
}