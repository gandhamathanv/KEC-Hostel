/* eslint-disable */
const config = require("../config/config");

module.exports = {
    getToken(req, res, next) {
        try {
            console.log(req.headers);
            const token = req.cookies.jwt;
            req.token = token;
        } catch (err) {
            res.status(400)({
                status: "failed",
            });
        }

        next();
    },
};