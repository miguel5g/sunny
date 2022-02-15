import supertest from 'supertest';

import { app } from '../../src/app';

describe('GetAppController', () => {
  const ghostAgent = supertest.agent(app);

  it('should return status code 200', async () => {
    const response = await ghostAgent.get('/');

    expect(response.statusCode).toBe(200);
  });

  it('should return the correct body schema', async () => {
    const { body } = await ghostAgent.get('/');

    expect(typeof body).toBe('object');
    expect(Object.keys(body)).toEqual(['app', 'environment', 'lifetime']);

    expect(typeof body.app).toBe('string');
    expect(typeof body.environment).toBe('string');
    expect(typeof body.lifetime).toBe('number');
  });
});
