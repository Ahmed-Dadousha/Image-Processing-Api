import express from 'express';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

//Router instance
export const images: express.Router = express.Router();

// Using sharp to resize the image
export const resizeImage = async (
  imagePath: string,
  fileName: string,
  width: number,
  height: number
): Promise<void | null> => {
  try {
    await sharp(imagePath)
      .resize(width, height)
      .toFormat('jpg')
      .toFile(
        path.resolve(
          __dirname,
          '../../../assets/images/thumb/' + fileName + '_thumb' + '.jpg'
        )
      );
  } catch (err) {
    console.log(err + 'hERE');
  }
};
images.get('/', async (req: express.Request, res: express.Response) => {
  const filename: string = req.query['filename'] as string;
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
      res.sendFile(thumbImagePath);
      console.log('The Image is already Exists in thumb folder');
    } else {
      resizeImage(fullImagePath, filename, width, height).then(() => {
        res.sendFile(thumbImagePath);
      });
    }
  } else {
    res.send('The Image is not exists in full folder ');
  }
});

module.exports = { images, resizeImage };
