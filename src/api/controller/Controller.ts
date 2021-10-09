
import { Request, Response } from "express";
export abstract class Controller<T> {
    abstract show(context: T): void
    abstract create(context: T): void
    abstract put(context: T): void
    abstract patch(context: T): void
    abstract delete(context: T): void
    abstract get(context: T): void
    abstract createContext(req: Request, res: Response): T
}