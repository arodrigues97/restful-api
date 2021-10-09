import { ArticleRoutes } from "./routes/ArticleRoutes"
import Api from "./api/Api"

//Define the routes our api has access to
const routes = [new ArticleRoutes()]

//Instantiate the api
const api = new Api(routes, 9090)

//Initialize the app
api.initialize()
