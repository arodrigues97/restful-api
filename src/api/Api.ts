import express from "express"
import { RouteManager } from "./route/RouteManager"

/**
 * Represents the components that make up this Restful API
 *
 */
class Api {
  private readonly routeManager: RouteManager

  constructor() {
    this.routeManager = new RouteManager()
  }

  /**
   * Initializes the api
   */
  initialize = () => {
    const app = express()
    const port = 3001
    this.routeManager.configure(app)
    app.listen(port, () => {
      console.log("Rest Api Initialized: http://localhost:" + port)
    })
  }
}

export default Api
