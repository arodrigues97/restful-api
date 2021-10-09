

import express from "express"
import { RequestsRoute } from "./request/RequestsRoute.route"
import { RouteHandler } from "./RouteHandler"
import { GetExpressMethodForHttp, HttpMethod } from "./HttpMethod";
import { IRouterMatcher } from "express-serve-static-core";

export class RouteManager {

    readonly handlers: RouteHandler<any>[]

    constructor() {
        this.handlers = [];
    }

    configure = (app: express.Express) => {
        this.register(new RequestsRoute())

        //Loop through all the route handlers
        this.handlers.forEach((handler) => {
            //Loop through each of the routes in the handlers
            handler.routes.forEach((route) => {
                //Loop through the exposed http methods and link controller to route
                route.methods.forEach((method) => {
                    const expressMethodHandler = GetExpressMethodForHttp(method, app)
                    if (!expressMethodHandler) {
                        throw Error("No express method found for the http method - " + method + "!")
                    }
                    console.log("Express Method: ", expressMethodHandler)
                    expressMethodHandler(app, route.route, (req, res) => handler.connectControllerMethod(req, res, method))
                })
            })
        })
    }

  
    register(handler: RouteHandler<any>) {
        handler.createRoutes()
        this.handlers.push(handler)
        console.log("Registering route handler: ", handler)
    }
}