import { Request, Response } from 'express';
import { HealthController } from '../../../../src/app/components/healthcheck/health.controller';
import { createRequest, createResponse } from 'node-mocks-http'

describe('HealthController', () => {

    let controller: HealthController;
    let request: Request;
    let response: Response;

    beforeEach(() => {
        request = createRequest();
        response = createResponse();
        controller = new HealthController(request, response);
    });

    it('checkHealth Retorna StatusCode 204', async () => {
        await controller.checkHealth();
        expect(response.statusCode).toBe(204);
    });

});
