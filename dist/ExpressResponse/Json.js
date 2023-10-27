"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req, res, next) {
    const { status, json } = res.locals;
    console.log("HandleToUnity  send result ,", json);
    if (json) {
        res.status(status).json(json);
    }
    else {
        next();
    }
}
exports.default = default_1;
