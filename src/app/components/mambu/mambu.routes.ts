import { Router } from "express";
import { validate } from "../../../lib/validator";
import { MambuController } from "./mambu.controller";
import { mambuRequest } from "./mambu.validators";

const mambuRoutes = Router();

mambuRoutes.get("/amountmambu", mambuRequest(), validate, (req: any, res: any) =>
  new MambuController(req, res).getAmountMambu()
);

export default mambuRoutes;
