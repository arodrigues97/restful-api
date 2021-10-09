import { ApiConsumer } from "../ApiConsumer"
import { Context } from "./Context"

/**
 * Represents the context of an authorized HTTP request
 *
 * Implements the base context to allow access to @link BaseContext.req and @link BaseContext.res
 *
 * Exposes the @link ApiConsumer to the controller through context
 */
export interface AuthContext extends Context {
  consumer: ApiConsumer
}
