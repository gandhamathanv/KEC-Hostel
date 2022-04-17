/* eslint-disable */
const config = require("../config/config");

module.exports = {
    getToken(req, res, next) {
        const token = req.cookies.jwt;
        console.log(token);
        req.token = token;
        next();
    },
};