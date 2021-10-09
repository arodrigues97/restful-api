import { AuthContext } from "./AuthContext";
import { Controller } from "./Controller";
import {Request, Response} from "express"


export abstract class AuthController extends Controller<AuthContext> {
    createContext(req: Request, res: Response): AuthContext  {
        return {
            req,
            res,
            consumer: {
                name: "Adam Rodrigues"
            },
        }
    }
}