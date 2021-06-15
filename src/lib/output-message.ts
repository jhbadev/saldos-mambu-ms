import { Monitor } from "./monitor";

export class OutputMessage {

    private monitor: Monitor;
    private operationName: string;

    public code: number;
    public message: string;
    public payload: {} | [];

    constructor(code: number, message: string, payload: {} | [], operationName: string) {
        this.code = code;
        this.message = message;
        this.payload = payload;
        this.operationName = operationName
        this.monitor = Monitor.getInstance(undefined, undefined);
    }

    public log(monitoringCode: string, error: any = this) {
        this.monitor.log(this.operationName, monitoringCode, error);
        return this;
    }
}
