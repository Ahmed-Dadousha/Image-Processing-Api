import express from 'express';
import { images } from './api/images';

const routes: express.Router = express.Router();

routes.use('/images', images);

routes.get('/', (_req: express.Request, res: express.Response): void => {
  res.send('Hello From Routes');
});

export default routes;
