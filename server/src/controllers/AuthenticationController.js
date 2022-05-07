/* eslint-disable */
const {
    staffInfo,
    staffLogin,
    studentInfo,
    studentLogin,
    permission,
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
    async logout(req, res) {
        try {
            res.cookie("jwt", null, {
                httpOnly: true,
            });
            res.send({
                status: "success",
            });
        } catch (err) {
            console.log(err);
            res.send({
                status: "error",
            });
        }
    },
    async studentRegister(req, res) {
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
            console.log(req);
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
            console.log(isPasswordValid);
            if (!isPasswordValid) {
                res.status(403).send({
                    error: "password Incorrect",
                });
            } else {
                const user = await studentInfo.findOne({
                    where: {
                        rollnumber: rollnumber,
                    },
                });
                const userJson = user.toJSON();
                const data = {
                    user: userJson,
                    viewer: "STUDENT",
                };
                const token = jwtSignUser(data);
                const tim = 3 * 24 * 60 * 60 * 1000;
                res.cookie("jwt", token, {
                    maxAge: tim,
                    httpOnly: true,
                });

                res.status(200).send({
                    status: "success",
                    data,
                    token,
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
                        collegeMailID: user.mailID,
                    },
                });
                const { level } = await permission.findOne({
                    where: {
                        responsibility: userInfo.hostelResponsibility,
                    },
                    attributes: ["level"],
                });
                const userJson = userInfo.toJSON();
                const data = {
                    user: userJson,
                    level,
                    viewer: "STAFF",
                };
                token = jwtSignUser(data);
                res.cookie("jwt", token, {
                    expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
                    httpOnly: true,
                });
                res.status(200).send({
                    staus: "success",
                    data,
                    token,
                });
            }
        } catch (err) {
            console.log(err);
            res.status(500).send({
                error: "Error in server",
            });
        }
    },
    async changePassword(req, res) {
        try {
            const { viewer, id, currentPassword, newPassword } = req.body;
            if (viewer == "student") {
                const user = await studentLogin.findOne({ where: { rollnumber: id } });
                if (user) {
                    const isPasswordValid = await user.comparePassword(currentPassword);
                    if (!isPasswordValid) {
                        res.status(403).send({
                            error: "password Incorrect",
                            isPasswordValid,
                        });
                    } else {
                        await user.update({
                            password: newPassword,
                        });
                        res.status(200).send({
                            status: "success",
                        });
                    }
                } else {
                    res.status(403).send({
                        status: "Failed",
                        error: "user does not exist",
                    });
                }
            }
            if (viewer == "staff") {
                const user = await staffLogin.findOne({ where: { mailID: id } });
                if (user) {
                    const isPasswordValid = await user.comparePassword(currentPassword);
                    if (!isPasswordValid) {
                        res.status(403).send({
                            error: "password Incorrect",
                            isPasswordValid,
                        });
                    } else {
                        await user.update({
                            password: newPassword,
                        });
                        res.status(200).send({
                            status: "success",
                        });
                    }
                } else {
                    res.status(403).send({
                        status: "Failed",
                        error: "user does not exist",
                    });
                }
            }
        } catch (err) {
            console.log(err);
            res.status(500).send({
                error: "Error in server",
            });
        }
    },
    async sentToken(req, res) {
        try {
            const decode = jwt.verify(req.token, config.authentication.jwtSecret);

            res.status(200).send({
                status: "success",
                data: decode,
                token: req.token,
            });
        } catch (err) {
            console.log(err);
            res.send({
                error: "cannot get data",
            });
        }
    },
};