"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(err, req, res, next) {
    if (typeof err === "string") {
        res.status(500).json({ error: err });
    }
    else if (typeof err === 'object') {
        const { status = 500, message } = err;
        console.log(err);
        res.status(status).json({ error: message });
    }
}
exports.default = default_1;
