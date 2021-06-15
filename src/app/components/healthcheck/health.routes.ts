import { Router } from "express";
import { HealthController } from "./health.controller";

const healthRoutes = Router();

healthRoutes.get("/healthcheck", (req, res) =>
  new HealthController(req, res).checkHealth()
);

export default healthRoutes;
