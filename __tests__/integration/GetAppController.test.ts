import supertest from 'supertest';

import { app } from '../../src/app';

describe('GetAppController', () => {
  let ghostAgent = supertest.agent(app);

  it('should return 200', async () => {
    let response = await ghostAgent.get('/');

    expect(response.statusCode).toBe(200);
  });

  it('should return the correct body schema', async () => {
    let { body } = await ghostAgent.get('/');

    expect(typeof body).toBe('object');
    expect(Object.keys(body)).toEqual(['app', 'environment', 'lifetime']);

    expect(typeof body.app).toBe('string');
    expect(typeof body.environment).toBe('string');
    expect(typeof body.lifetime).toBe('number');
  });
});
