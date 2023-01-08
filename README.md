# Image_Processing_API

## Introdction

    This is a simple image processing api which you can use to resize images

## Setup

1. Run `npm i` to install all Dependencies
2. Run `npm run prettier` for style
3. Run `npm run lint ` also for style
4. Run `npm run test` For unit testing

## Usage

- Run `npm run build` To Build the project
- Run `npm run start` To start the server
- Put your image in `assets/images/full ` folder
- The image should be in jpg format
- Got to http://localhost:3000/
- Write **filename** , **width** and **height** params in the url like the next example

  ```
  http://localhost:3000/api/images?filename=fjord&width=50&height=50
  ```

- Then hit **Enter** key
- The api will resize the image to the new dimensions you have passed
- You can find the resized image in the thumb folder

## Technologies

- Node.js
- express
- typescript
- jasmine
