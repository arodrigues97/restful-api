import { AuthContext } from "../AuthContext";
import { AuthController } from "../AuthController";

export class RequestController extends AuthController {

    show(context: AuthContext) {
        throw new Error("Method not implemented.");
    }

    create(context: AuthContext) {
        throw new Error("Method not implemented.");
    }

    delete(context: AuthContext) {
        throw new Error("Method not implemented.");
    }

    put(context: AuthContext) {
        throw new Error("Method not implemented.");
    }

    patch(context: AuthContext) {
        throw new Error("Method not implemented.");
    }

    get(context: AuthContext) {
       console.log(context.consumer)
       context.res.json(context.consumer)
    }

}