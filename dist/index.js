"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const userRoute_1 = __importDefault(require("./Routes/userRoute"));
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(userRoute_1.default);
app.listen(port, () => {
    console.log(`Server is running on PORT:${port}`);
});
