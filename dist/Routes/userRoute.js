"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../Controllers/userController");
const router = (0, express_1.Router)();
router.get('/users', userController_1.getAllUser);
exports.default = router;
