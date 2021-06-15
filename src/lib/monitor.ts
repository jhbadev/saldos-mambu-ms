import { Request, Response } from "express";
// const { monitoreoBECH } = require('monitoreo-bech');

export class Monitor {

    private request: Request;
    private response: Response;

    static instance: Monitor;

    private constructor(request: Request, response: Response) {
        this.request = request;
        this.response = response;
    }

    static getInstance(request: Request | undefined, response: Response | undefined) {

        if (!Monitor.instance) {
            Monitor.instance = new Monitor(request as Request, response as Response);
        }

        return Monitor.instance;
    }

    public log(operation: string, monitoringCode: string, message: {}): void {
        const headers = this.getHeaders(operation, monitoringCode);
        // monitoreoBECH(headers, this.response, {}, { message }, monitoringCode);
    }

    private getHeaders(operation: string, monitoringCode: string) {
        return {
            functionality: this.request.headers.idfuncionalidad,
            artefactName: 'Ahorro Vivienda',
            artefactType: 'BFF',
            operation: operation,
            functionalityCode: this.request.headers.codeFuncionalidad as string,
            applicationCode: monitoringCode,
            finishDate: new Date()
        }
    }

    public getTrackHeaders() {
        return {
            sessionCode: this.request.headers.codigosesion,
            rut: this.request.headers.rutcliente,
            channel: this.request.headers.canal,
            applicationName: 'Ahorro Vivienda',
            xTrackId: this.request.headers.xtrackid
        }
    }
}
