import express, { Request, Response } from "express"
import { GetExpressMethodForHttp } from "./HttpMethod"
import { RouteHandler } from "./RouteHandler"

export class RouteManager {
  readonly handlers: RouteHandler[]

  constructor(handlers: RouteHandler[]) {
    this.handlers = handlers
  }

  /**
   * Configures the route manager.
   *
   * This method will loop through all the registered route handlers and iterate over
   * their route descriptions. It will the instantiate @link Route objects for the handler
   * and create the functionality between the express routing to our custom controller handling
   *
   * @param app The express app instance
   */
  configure = (app: express.Express) => {
    //Loop through all the route handlers
    this.handlers.forEach((handler) => {
      //Instantiates the routes by the descriptions
      handler.createRoutes()

      //Loop through each of the routes in the handlers
      handler.routes.forEach((route) => {
        //Loop through the exposed http methods and link controller to route
        route.methods.forEach((method) => {
          //Returns the express http method determined by the type
          const expressMethodHandler = GetExpressMethodForHttp(
            method,
            app
          ).bind(app)

          //Connect the route name to the express http method, then connect the callback
          //to the handler method
          expressMethodHandler(route.route, (req: Request, res: Response) => {
            try {
              const response = handler.connectControllerMethod(req, res, method)
              const { status, resource } = response
              res.status(status).json(resource)
            } catch (error) {
              res.status(500).send("Internal server error!")
            }
          })
        })
      })
    })
  }
}
