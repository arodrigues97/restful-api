
import {Request, Response} from "express"
/**
 * Represents the context of a basic HTTP request
 */
export interface BaseContext {
    req: Request
    res: Response
}