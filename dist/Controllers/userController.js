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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUser = getAllUser;
exports.createUser = createUser;
const userModel_1 = require("../Models/userModel");
function getAllUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let [rows, field] = yield (0, userModel_1.read)();
            res.json(rows);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const { name, age } = req.body;
            const image = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
            const newUser = {
                name,
                age,
                image
            };
            const result = yield (0, userModel_1.create)(newUser);
            res.status(201).json({ message: 'User created successfully', result });
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
