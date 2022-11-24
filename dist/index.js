"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
//Creating an instance from express
const app = (0, express_1.default)();
// Server Port
const port = 3000;
//Using Routes
app.use('/api', index_1.default);
//Starting Server
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});
exports.default = app;
