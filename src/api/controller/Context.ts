import { Request, Response } from "express"
/**
 * Represents the context of a basic HTTP request
 */
export interface Context {
  req: Request
  res: Response
}
