/* eslint-disable */
const {
    User,
    UserInfo,
    BookingStats,
    StaffLogin,
    StaffInformation,
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
    async register(req, res) {
        console.log(req.body);
        try {
            const user = await User.create(req.body);
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
            const user = await StaffLogin.create(req.body);
            res.status(200).send(user.toJSON());
        } catch (err) {
            console.log(err);
            res.status(400).send({
                error: "Error in Authenticationcroller.js",
            });
        }
    },
    async login(req, res) {
        try {
            const { rollnumber, password } = req.body;

            const user = await User.findOne({
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
                const userInfo = await UserInfo.findOne({
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
            const user = await StaffLogin.findOne({
                where: {
                    mailId: mailId,
                },
            });
            console.log("haii");
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
                const userInfo = await StaffInformation.findOne({
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
    async BookingStats(req, res) {
        try {
            const { hostelName } = req.body;
            console.log(req.body);
            const data = await BookingStats.findAll({
                where: {
                    hostelName: hostelName,
                },
            });
            res.status(200).send({
                status: "success",
                data,
            });
        } catch (err) {
            console.log(err);
            res.status(500).send({
                error: "Error in server",
            });
        }
    },
};