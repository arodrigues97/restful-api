import { BaseController } from "../api/controller/BaseController"
import { Context } from "../api/controller/Context"
import { ControllerResponse } from "./../api/controller/ControllerResponse"
import { Article } from "./../resource/Article"
import { articleStore } from "./../store/ArticleStore"

type ArticleResponse = ControllerResponse<Article>

export class ArticleController extends BaseController<ArticleResponse> {
  show(context: Context): ArticleResponse {
    throw new Error("Method not implemented.")
  }
  create(context: Context): ArticleResponse {
    throw new Error("Method not implemented.")
  }
  put(context: Context): ArticleResponse {
    throw new Error("Method not implemented.")
  }
  patch(context: Context): ArticleResponse {
    throw new Error("Method not implemented.")
  }
  delete(context: Context): ArticleResponse {
    throw new Error("Method not implemented.")
  }
  get(context: Context): ArticleResponse {
    return {
      status: 200,
      resource: articleStore.articles,
    }
  }
}
