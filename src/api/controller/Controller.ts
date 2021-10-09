import { Request, Response } from "express"
import { Context } from "./Context"

export type Controller<T extends Context, K> = {
  show?: HttpMethodAction<T, K>
  create?: HttpMethodAction<T, K>
  put?: HttpMethodAction<T, K>
  patch?: HttpMethodAction<T, K>
  delete?: HttpMethodAction<T, K>
  index?: HttpMethodAction<T, K>
  createContext: (req: Request, res: Response) => T
}

export type HttpMethodAction<T, K> = (context: T) => K
