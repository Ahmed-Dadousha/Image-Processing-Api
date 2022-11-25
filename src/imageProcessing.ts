import sharp from 'sharp';
import path from 'path';
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
          '../assets/images/thumb/' + fileName + '_thumb' + '.jpg'
        )
      );
    console.log('Done');
  } catch (err) {
    console.log(err + ' in resizeImage Function ');
  }
};
