import express from "express"
import { GetExpressMethodForHttp } from "./HttpMethod"
import { RouteHandler } from "./RouteHandler"

export class RouteManager {
  readonly handlers: RouteHandler<any>[]

  constructor() {
    this.handlers = []
  }

  configure = (app: express.Express) => {
    //Loop through all the route handlers
    this.handlers.forEach((handler) => {
      //Loop through each of the routes in the handlers
      handler.routes.forEach((route) => {
        //Loop through the exposed http methods and link controller to route
        route.methods.forEach((method) => {
          const expressMethodHandler = GetExpressMethodForHttp(method, app)
          if (!expressMethodHandler) {
            throw Error(
              "No express method found for the http method - " + method + "!"
            )
          }
          console.log("Express Method: ", expressMethodHandler)
          expressMethodHandler(route.route, (req, res) =>
            handler.connectControllerMethod(req, res, method)
          )
        })
      })
    })
  }

  register(handler: RouteHandler<any>) {
    handler.createRoutes()
    this.handlers.push(handler)
    console.log("Registering route handler: ", handler)
  }
}
