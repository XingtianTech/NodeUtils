"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = void 0;
const internal = function (err, req, res, next) {
    if (err instanceof Error) {
        res.status(500).send(err.message);
    }
    else {
        next(err);
    }
};
exports.response = {
    internal
};
