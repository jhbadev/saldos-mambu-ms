import { Request, Response } from "express";
import { HttpStatus } from './http-status.enum';
import { ModuleResponse } from "./module-response.interface";
import { Monitor } from "./monitor";

export abstract class Controller {

    protected request: Request;
    protected response: Response;

    private promiseModule: Promise<ModuleResponse>;

    constructor(req: Request, res: Response) {
        this.request = req;
        this.response = res;
        Monitor.getInstance(this.request, this.response);
    }

    protected getResponse(module: Promise<ModuleResponse>) {

        this.promiseModule = module;
        return this.resolveModule();
    }

    private async resolveModule() {
        try {
            const message = await this.promiseModule;
            return this.createResponse(message);
        } catch (error) {
            return this.internalServerError();
        }
    }

    private createResponse(message: ModuleResponse) {
        return this.response.status(message.code).json(message);
    }

    protected noContent() {
        return this.response.status(HttpStatus.NO_CONTENT).send();
    }

    private internalServerError() {
        return this.response.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
    }
}
