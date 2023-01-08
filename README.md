# Image_Processing_API

## Introdction

    This is a simple image processing api which you can use to resize images

## Usage

- Run `npm run build` To Build the project
- Run `npm run start` To start the server
- Put your image in assets/images/full folder
- The image should be in jpg format
- Got to http://localhost:3000/
- Write **filename** , **width** and **height** params in the url like the next example

  ```
  http://localhost:3000/api/images?filename=fjord&width=50&height=50
  ```

- Then hit **Enter** key
- The api will resize the image to the new dimensions you have passed
- You can find the resized image in the thumb folder

## Setup

1. Run `npm i` to install all Dependencies
2. Run `npm run prettier` for style
3. Run `npm run lint ` also for style
4. Run `npm run test` For unit testing

## Technologies

- Node.js
- express
- Javascript

<!-- # Image-Processing-Api

### Commands

- Build: `npm run build  `
- Prettier: `npm run prettier `
- Lint: `npm run lint  `
- Unit Test: `npm run test  `
- Nodemon: `npm run start  `

# Usage

The server will listen to port 3000!

### Instructions



### The endpoint to resize Images


another example

- Write These params in url:filename:'your image name without extenstion' => string; <br>
- width: "Your image new width" => number; <br>
- height: "Your image new height" => number; <br> -->
