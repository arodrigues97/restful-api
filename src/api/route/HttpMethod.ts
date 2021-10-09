import express from "express"

/**
 * Represent an HTTP method
 */
export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE"
}

export const GetExpressMethodForHttp =  (method: HttpMethod, app: express.Express) => {
    switch (method) {
        case HttpMethod.GET:
            return app.get
            case HttpMethod.POST:
                return app.post
                case HttpMethod.PUT:
                    return app.put
                    case HttpMethod.PATCH:
                        return app.patch
                        case HttpMethod.DELETE:
                            return app.delete
    }
}