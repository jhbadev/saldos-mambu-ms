import { Service } from "../../../lib/service";
import http from "axios";



export class MambuService {

  public async getAmountMambu(url: string, body:{}, options:{}) {

    const data = await http.get(url, body);
    return data;
  }
}
