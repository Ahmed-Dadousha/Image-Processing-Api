"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = exports.images = void 0;
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
//Router instance
exports.images = express_1.default.Router();
// Using sharp to resize the image
const resizeImage = (imagePath, fileName, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, sharp_1.default)(imagePath)
            .resize(width, height)
            .toFormat('jpg')
            .toFile(path_1.default.resolve(__dirname, '../../../assets/images/thumb/' + fileName + '_thumb' + '.jpg'));
    }
    catch (err) {
        console.log(err + 'hERE');
    }
});
exports.resizeImage = resizeImage;
exports.images.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.query['filename'];
    const height = req.query['height']
        ? parseInt(req.query['height'], 10)
        : null;
    const width = req.query['width']
        ? parseInt(req.query['width'], 10)
        : null;
    // check if the query is correct
    if (!filename || !height || !width) {
        res
            .status(400)
            .send('Please make sure url contains correct filename, height and width params');
        return;
    }
    //Get image path in full folder
    const fullImagePath = path_1.default.resolve(__dirname, `../../../assets/images/full/${filename}.jpg`);
    // thumb path in the ${filename}-${height}x${width} format to save different dimensions
    const thumbImagePath = `${path_1.default.resolve(__dirname, `../../../assets/images/thumb/${filename}_thumb.jpg`)}`;
    //Check if image exist in full images folder
    if (fs_1.default.existsSync(fullImagePath) === true) {
        //Check if image exists in thumb images folder
        if (fs_1.default.existsSync(thumbImagePath) === true) {
            res.sendFile(thumbImagePath);
            console.log('The Image is already Exists in thumb folder');
        }
        else {
            (0, exports.resizeImage)(fullImagePath, filename, width, height).then(() => {
                res.sendFile(thumbImagePath);
            });
        }
    }
    else {
        res.send('The Image is not exists in full folder ');
    }
}));
module.exports = { images: exports.images, resizeImage: exports.resizeImage };
