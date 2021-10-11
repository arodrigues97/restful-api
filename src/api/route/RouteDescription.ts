import { Controller } from "../controller/Controller"
import { HttpMethod } from "./HttpMethod"
import express from "express"

export interface RouteDescription {
  route: string
  include?: HttpMethod[]
  exclude?: HttpMethod[]
  controller?: Controller<any, any>
}
