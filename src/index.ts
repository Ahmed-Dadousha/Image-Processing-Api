import express from 'express';
import routes from './routes/index';

//Creating an instance from express
const app: express.Application = express();
// Server Port
const port: number = 3000;

//Using Routes
app.use('/api', routes);

//
app.get('/', (_req: express.Request, res: express.Response) => {
  res.send('Welcome to Image Processing API');
});
//Starting Server
app.listen(port, (): void => {
  console.log(`Listening on port ${port}!`);
});

export default app;
