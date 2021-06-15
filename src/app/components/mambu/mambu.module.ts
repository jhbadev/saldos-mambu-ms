import { Module } from "../../../lib/module";
import { MambuService } from "./mambu.service";

export class MambuModule extends Module {
  public async getAmountMambu(body: any, headers: any) {
    const url: string = 'http://localhost:3000/data/'

    const rq: {} = {
      headerRQ: {
        msgId: body.msgId,
        timestamp: body.timestamp,
      },
      securityRQ: {
        userId: body.userId,
        hostId: body.hostId,
        channelId: body.channelId,
        profile: body.profile,
      },
      messageRQ: {
        rut: body.rut,
        numCta: body.numCta,
      },
    };

    const options: {} = {
      headers: {
        Authorization: headers.pChannel || "",
        "Content-Type": headers["content-type"],
      },
    };

    try{
    const saldos = new MambuService();
    return await saldos.getAmountMambu(url, rq, options);
    } catch (error) {
      console.log(error);
    }
  }
}
