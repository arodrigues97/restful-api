import express, { Request, Response } from "express"
import bodyParser from "body-parser"
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
    //Implement json body parsing
    app.use(express.json())
    //Implement url encoded body parsing
    app.use(
      express.urlencoded({
        extended: true,
      })
    )

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
              const { status, resource, message } = response
              res.status(status)

              //Response back with the status code for any NON 200
              if (status !== 200) {
                res.send(message || "Status Code: " + status)
                return
              }

              //If the resource returned from the controller is just a string send as so
              if (typeof resource === "string") {
                res.send(resource)

                //Else we will send it as json
              } else {
                res.json(resource)
              }
            } catch (error) {
              res.status(500).send("Internal server error!")
              console.error(error)
            }
          })
        })
      })
    })
  }
}
