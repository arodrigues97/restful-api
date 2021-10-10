import { BaseController } from "../api/controller/BaseController"
import { Context } from "../api/controller/Context"
import { ControllerResponse } from "./../api/controller/ControllerResponse"
import { Article } from "./../resource/Article"
import { articleStore } from "./../store/ArticleStore"

type ArticleResponse = ControllerResponse<Article | string | string[]>

export class ArticleController extends BaseController<ArticleResponse> {
  show(context: Context): ArticleResponse {
    return {
      status: 200,
      resource: articleStore.articles.map((a) => a.name),
    }
  }
  create(context: Context): ArticleResponse {
    throw new Error("Method not implemented.")
  }
  put(context: Context): ArticleResponse {
    const article = articleStore.getArticleByName(context.req.params.name)
    const content = context.req.body

    //If the article exists update it
    if (article) {
      articleStore.update({
        id: article.id,
        name: article.name,
        content,
      })
      return {
        status: 200,
      }
    }

    //If the article didn't exist create a new article
    articleStore.store({
      id: articleStore.articles.length + 1,
      name: "wiki",
      content,
    })
    return {
      status: 200,
    }
  }
  patch(context: Context): ArticleResponse {
    throw new Error("Method not implemented.")
  }
  delete(context: Context): ArticleResponse {
    throw new Error("Method not implemented.")
  }
  index(context: Context): ArticleResponse {
    const { params } = context.req
    const article = articleStore.getArticleByName(params.name)

    //If the article doesn't exist then respond with 404
    if (!article) {
      return {
        status: 404,
        message: "404 Not found - No Payload.",
      }
    }

    //Else return with the article content
    return {
      status: 200,
      resource: article.content,
    }
  }
}
