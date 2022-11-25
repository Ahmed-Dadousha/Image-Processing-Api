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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const path_1 = __importDefault(require("path"));
const imageProcessing_1 = require("../imageProcessing");
const request = (0, supertest_1.default)(index_1.default);
describe('1. Test endpoints response', () => {
    it('gets the / endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/');
        expect(response.status).toBe(200);
    }));
    it('gets the /api endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api');
        expect(response.status).toBe(200);
    }));
});
describe('2. Image transform function should resolve or reject', () => {
    it('Expect resizeImage not to threw an error ', () => __awaiter(void 0, void 0, void 0, function* () {
        return expect((0, imageProcessing_1.resizeImage)(path_1.default.resolve(__dirname + '../../assets/images/full/fjord.jpg'), 'fjord', 50, 50)).not.toBeNull();
    }));
});
