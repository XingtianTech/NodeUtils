"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req, res, next) {
    const { status = 200, json } = res.locals;
    if (json) {
        res.status(status).json(json);
    }
    else {
        next();
    }
}
exports.default = default_1;
