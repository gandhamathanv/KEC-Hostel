/* eslint-disable */
const config = require("../config/config");

module.exports = {
    getToken(req, res, next) {
        req.token = req.headers.authorization.split(" ")[1];
        next();
    },
};