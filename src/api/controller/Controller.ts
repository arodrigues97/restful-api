import { Context } from "./Context"

import { Request, Response } from "express"

export abstract class Controller<T extends Context, K> {
  abstract show(context: T): K
  abstract create(context: T): K
  abstract put(context: T): K
  abstract patch(context: T): K
  abstract delete(context: T): K
  abstract get(context: T): K
  abstract createContext(req: Request, res: Response): T
}
