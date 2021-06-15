import { Controller } from "../../../lib/controller";
import { Operations } from "../../enums/operations.enum";
import { MambuModule } from "./mambu.module";

export class MambuController extends Controller {
  public async getAmountMambu() {
    const customer = this.request.body;
    const options = this.request.headers;
 
    const module = new MambuModule(Operations.getAmount);
    const result = await module.getAmountMambu(customer, options);
 
    return this.response.status(200).send(result?.data);
  }
}
