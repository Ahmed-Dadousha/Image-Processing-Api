import supertest from 'supertest';
import app from '../index';
import { resizeImage, images } from '../routes/api/images';
import path from 'path';

const request = supertest(app);

describe('1. Test endpoint response', (): void => {
  it('gets the api/images endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});

describe('2. Image transform function should resolve or reject', (): void => {
  it('Expect resizeImage not to threw an error ', async (): Promise<void> => {
    return expect(
      resizeImage(
        path.resolve(__dirname + '../../assets/images/full/fjord.jpg'),
        'fjord',
        50,
        50
      )
    ).not.toBeNull();
  });
});
