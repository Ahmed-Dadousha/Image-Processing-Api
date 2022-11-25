import supertest from 'supertest';
import app from '../index';
import path from 'path';
import { resizeImage } from '../imageProcessing';
const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('1. Test endpoints response', (): void => {
	it('gets the / endpoint', async (): Promise<void> => {
		const response: supertest.Response = await request.get('/');
		expect(response.status).toBe(200);
	});

	it('gets the /api endpoint', async (): Promise<void> => {
		const response: supertest.Response = await request.get('/api');
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
