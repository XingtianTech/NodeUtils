"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressResponse = void 0;
const Err_1 = __importDefault(require("./Err"));
const Json_1 = __importDefault(require("./Json"));
exports.ExpressResponse = {
    json: Json_1.default,
    error: Err_1.default
};
