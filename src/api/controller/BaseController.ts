import { BaseContext } from "./BaseContext";
import { Controller } from "./Controller";
import {Request, Response} from "express"

export abstract class BaseController extends Controller<BaseContext> {
    createContext = (req: Request, res: Response): BaseContext => {
        return {
            req,
            res
        }
    }
}