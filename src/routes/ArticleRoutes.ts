import { HttpMethod } from "../api/route/HttpMethod"
import { RouteDescription } from "../api/route/RouteDescription"
import { RouteHandler } from "../api/route/RouteHandler"
import { ArticleController } from "../controllers/ArticleController"

/**
 *       //Implement json body parsing
    app.use(express.json())
    //Implement url encoded body parsing
    app.use(
      express.urlencoded({
        extended: true,
      }
      )
    )
 */
export class ArticleRoutes extends RouteHandler {
  readonly descriptions: RouteDescription[] = [
    {
      route: "/articles",
      include: [HttpMethod.GET]
    },
    {
      route: "/articles/:name",
      include: [HttpMethod.PUT, HttpMethod.GET],
    },
  ]

  constructor() {
    super(new ArticleController())
  }
}
