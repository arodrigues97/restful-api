import { RequestController } from "../../controller/request/RequestController";
import { Request } from "../../resource/Request";
import { HttpMethod } from "../HttpMethod";
import { RouteHandler } from "../RouteHandler";


export class RequestsRoute extends RouteHandler<Request> {

    constructor() {
        super(new RequestController())
    }
    
    descriptions = [
            {
                route: "/requests",
                include: [HttpMethod.GET]
            },
            {
                route: "/requests/:id"
            }
        ]
    
}