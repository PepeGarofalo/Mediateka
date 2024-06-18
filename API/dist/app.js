"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const media_routes_1 = __importDefault(require("./routes/media.routes"));
// a cors no le dio la gana de pinchar con el import 
var cors = require('cors');
const app = (0, express_1.default)();
app.use(express_1.default.static('public'));
app.use((0, morgan_1.default)('dev'));
app.use(cors());
app.use(express_1.default.json());
app.use(media_routes_1.default);
exports.default = app;
