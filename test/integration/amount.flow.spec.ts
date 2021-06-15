import request from 'supertest';
import server from '../../src/server/server';

describe('Amount Flow', () => {

    it('getAmount Retorna StatusCode 200', async (done) => {
        request(server).get('/api/v2/amount').end((error, res) => {
            expect(res.status).toBe(200);
            done();
        });
    });
});
