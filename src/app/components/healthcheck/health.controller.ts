import { Controller } from "../../../lib/controller";

export class HealthController extends Controller {

    public async checkHealth() {
        return this.response.status(204).send();
    }
}
