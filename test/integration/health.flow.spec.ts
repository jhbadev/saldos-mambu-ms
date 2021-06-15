import request from 'supertest';
import server from '../../src/server/server';

describe('Health Flow', () => {

    it('healthCheck Retorna StatusCode 204', async (done) => {
        request(server).get('/api/v2/healthcheck').end((error, res) => {
            expect(res.status).toBe(204);
            done();
        });
    });
});
