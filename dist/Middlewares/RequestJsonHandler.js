"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleRequest = void 0;
const HandleRequest = (handler) => {
    return (req, res) => {
        handler(req).then(result => {
            res.status(result.status).json(result.body);
        })
            .catch(e => {
            console.log(e);
            res.status(500).send({ error: 'An unkown error occurred.' });
        });
    };
};
exports.HandleRequest = HandleRequest;
