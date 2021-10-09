import express from "express"
import { RouteHandler } from "./route/RouteHandler"
import { RouteManager } from "./route/RouteManager"

/**
 * Represents the components that make up this Restful API
 *
 */
class Api {
  private readonly routeManager: RouteManager
  port: number

  constructor(routeHandlers: RouteHandler[], port: number) {
    this.routeManager = new RouteManager(routeHandlers)
    this.port = port
  }

  /**
   * Initializes the api
   */
  initialize = () => {
    const app = express()

    this.routeManager.configure(app)
    app.listen(this.port, () => {
      console.log("Rest Api Initialized: http://localhost:" + this.port)
    })
  }
}

export default Api
