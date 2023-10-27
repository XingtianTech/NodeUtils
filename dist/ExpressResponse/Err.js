"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(err, req, res, next) {
    console.log("Error catch!!");
    if (typeof err === "string") {
        res.status(500).json({ error: err });
    }
    else if (typeof err === 'object') {
        const { status = 500 } = err;
        console.dir("Error object:", err);
        res.status(status).json(err);
    }
}
exports.default = default_1;
