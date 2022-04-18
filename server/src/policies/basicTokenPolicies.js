/* eslint-disable */
const config = require("../config/config");

module.exports = {
    getToken(req, res, next) {
        try {
            const token = req.headers;
            console.log(token);
            // const token = req.cookies.jwt;
            // req.token = token;
        } catch (err) {
            res.status(400)({
                status: "failed",
            });
        }

        next();
    },
};