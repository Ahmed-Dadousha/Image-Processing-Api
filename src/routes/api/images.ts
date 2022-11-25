import express from 'express';
import path from 'path';
import fs from 'fs';
import { resizeImage } from '../../imageProcessing';
//Router instance
export const images: express.Router = express.Router();

images.get('/', async (req: express.Request, res: express.Response) => {
  const filename: string = req.query['filename'] as string;

  // width and height must be numbers only
  // if (req.query.height <= 0 || width <= 0) {
  //   res.status(400).send('Please make sure width and height are biger than 0');
  //   return;
  // }

  const height = req.query['height']
    ? parseInt(req.query['height'] as string, 10)
    : null;
  const width = req.query['width']
    ? parseInt(req.query['width'] as string, 10)
    : null;

  // check if the query is correct
  if (!filename || !height || !width) {
    res
      .status(400)
      .send(
        'Please make sure url contains correct filename, height and width params'
      );
    return;
  }
  // width and height must be  biger than 0
  if (height <= 0 || width <= 0) {
    res.status(400).send('Please make sure width and height are biger than 0');
    return;
  }

  //Get image path in full folder
  const fullImagePath = path.resolve(
    __dirname,
    `../../../assets/images/full/${filename}.jpg`
  );

  // thumb path in the ${filename}-${height}x${width} format to save different dimensions
  const thumbImagePath = `${path.resolve(
    __dirname,
    `../../../assets/images/thumb/${filename}_thumb.jpg`
  )}`;

  //Check if image exist in full images folder
  if (fs.existsSync(fullImagePath) === true) {
    //Check if image exists in thumb images folder
    if (fs.existsSync(thumbImagePath) === true) {
      res.status(200).sendFile(thumbImagePath);
      console.log('The Image is already Exists in thumb folder');
    } else {
      resizeImage(fullImagePath, filename, width, height).then(() => {
        res.status(200).sendFile(thumbImagePath);
      });
    }
  } else {
    res.send('The Image is not exists in full folder ');
  }
});

// module.exports = images;

// images.get('/', (req, res, next) => {
//   res.send('Hello From /api/image end point');
//   next();
// });
