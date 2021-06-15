import { OutputMessage } from './output-message'
import { HttpStatus } from './http-status.enum'

export abstract class Module {

    private operationName: string;

    constructor(operationName: string) {
        this.operationName = operationName;
    }

    protected success(message = 'Success', payload: {} | []) {
        return this.getMessage(HttpStatus.OK, message, payload);
    }

    protected forbidden(message = 'Forbidden') {
        return this.getMessage(HttpStatus.FORBIDDEN, message, {});
    }

    protected notFound(message = 'Resource Not Found') {
        return this.getMessage(HttpStatus.NOT_FOUND, message, {});
    }

    protected conflict(message = 'Conflict') {
        return this.getMessage(HttpStatus.CONFLICT, message, {});
    }

    private getMessage(statusCode: number, message: string, payload: {} | []) {
        return new OutputMessage(statusCode, message, payload, this.operationName);
    }
}
