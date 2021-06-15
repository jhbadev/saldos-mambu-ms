import { Request, Response } from 'express';
import { createRequest, createResponse } from 'node-mocks-http'

import { AmountController } from '../../../../src/app/components/amount/amount.controller';

describe('AmountController', () => {

    let controller: AmountController;
    let request: Request;
    let response: Response;

    beforeEach(() => {
        request = createRequest();
        response = createResponse();
        controller = new AmountController(request, response);
    });

    it('getAmount Retorna StatusCode 200', async () => {
        await controller.getAmount();
        expect(response.statusCode).toBe(200);
    });

});
