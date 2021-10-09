import { Context } from "./Context"
import { Controller } from "./Controller"
import { Request, Response } from "express"

export abstract class BaseController<T> implements Controller<Context, T> {
  createContext = (req: Request, res: Response): Context => {
    return {
      req,
      res,
    }
  }
}
