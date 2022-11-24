"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const images_1 = require("./api/images");
const routes = express_1.default.Router();
routes.use('/images', images_1.images);
routes.get('/', (req, res) => {
    res.send('Hello From Routes');
});
exports.default = routes;
