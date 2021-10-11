import Api from "./api/Api"
import { routes } from "./routes"

//Instantiate the api
export const api = new Api(routes, 9090)

//Initialize the app
api.initialize()
