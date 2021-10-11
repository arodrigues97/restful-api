import express from "express"
import { RouteHandler } from "./route/RouteHandler"
import { RouteManager } from "./route/RouteManager"

/**
 * Represents the components that make up this Restful API
 *
 */
class Api {
  private readonly routeManager: RouteManager
  private readonly port: number
  private readonly app: express.Express

  constructor(routeHandlers: RouteHandler[], port: number) {
    this.routeManager = new RouteManager(routeHandlers)
    this.port = port
    this.app = express()
  }

  configureRoutes = () => {
    this.routeManager.configure(this.app)
  }

  /**
   * Initializes the api
   */
  initialize = () => {
    this.configureRoutes()
    this.app.listen(this.port, () => {
      console.log("Rest Api Initialized: http://localhost:" + this.port)
    })
  }

  getExpressApp = () => this.app
  getRouteManager = () => this.routeManager
}

export default Api
