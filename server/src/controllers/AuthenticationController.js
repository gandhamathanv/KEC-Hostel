/* eslint-disable */
const {
    staffInfo,
    staffLogin,
    studentInfo,
    studentLogin,
} = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK,
    });
}
module.exports = {
    async studentRegister(req, res) {
        console.log(req.body);
        try {
            const user = await studentLogin.create(req.body);
            res.status(200).send(user.toJSON());
        } catch (err) {
            console.log(err);
            res.status(400).send({
                error: "Error in Authenticationcroller.js",
            });
        }
    },
    async staffRegister(req, res) {
        console.log(req.body);
        try {
            const user = await staffLogin.create(req.body);
            res.status(200).send(user.toJSON());
        } catch (err) {
            console.log(err);
            res.status(400).send({
                error: "Error in Authenticationcroller.js",
            });
        }
    },
    async studentLogin(req, res) {
        try {
            const { rollnumber, password } = req.body;

            const user = await studentLogin.findOne({
                where: {
                    rollnumber: rollnumber,
                },
            });
            if (!user) {
                res.status(403).send({
                    error: "user Rollnumber incorrect",
                });
            }
            const isPasswordValid = await user.comparePassword(password);

            if (!isPasswordValid) {
                res.status(403).send({
                    error: "password Incorrect",
                });
            } else {
                const userInfo = await studentInfo.findOne({
                    where: {
                        rollnumber: rollnumber,
                    },
                });
                const userJson = userInfo.toJSON();
                res.status(200).send({
                    user: userJson,
                    token: jwtSignUser(userJson),
                });
            }
        } catch (err) {
            console.log(err);
            res.status(500).send({
                error: "Error in server",
            });
        }
    },
    async staffLogin(req, res) {
        try {
            console.log(req);
            const { mailId, password } = req.body;
            const user = await staffLogin.findOne({
                where: {
                    mailId: mailId,
                },
            });
            console.log("haii");
            if (!user) {
                res.status(403).send({
                    error: "user mail ID is incorrect",
                });
            }
            const isPasswordValid = await user.comparePassword(password);

            if (!isPasswordValid) {
                res.status(403).send({
                    error: "password Incorrect",
                });
            } else {
                const userInfo = await staffInfo.findOne({
                    where: {
                        identityNumber: user.identityNumber,
                    },
                });
                const userJson = userInfo.toJSON();
                res.status(200).send({
                    user: userJson,
                    token: jwtSignUser(userJson),
                });
            }
        } catch (err) {
            console.log(err);
            res.status(500).send({
                error: "Error in server",
            });
        }
    },
};