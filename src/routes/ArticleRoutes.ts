import { HttpMethod } from "../api/route/HttpMethod"
import { RouteDescription } from "../api/route/RouteDescription"
import { RouteHandler } from "../api/route/RouteHandler"
import { ArticleController } from "../controllers/ArticleController"

export class ArticleRoutes extends RouteHandler {
  readonly descriptions: RouteDescription[] = [
    {
      route: "/articles",
      include: [HttpMethod.GET],
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
