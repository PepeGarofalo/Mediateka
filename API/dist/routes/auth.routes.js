"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controllers_1 = require("../controllers/auth.controllers");
const validate_1 = require("../middleware/validate");
const router = (0, express_1.Router)();
router.post('/login', validate_1.verifyToken, auth_controllers_1.login);
exports.default = router;
