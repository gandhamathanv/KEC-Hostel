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

    async studentDataRegister(req, res) {
        try {
            const t = await sequelize.transaction();
            const user = await studentInfo.create(req.body, { transaction: t });

            await db.studentLogin.create({
                rollnumber: req.body.rollnumber,
                password: "Kongu2022",
                collegeMailID: req.body.collegeMailID,
            });

            const result = await mailer(collegeMailID);
            console.log("result ", result);
            if (result.status != "success") {
                console.log("error in mail");
                new Error("error");
            }
            console.log({ id: req.body.collegeMailID, trans: t });
        } catch (err) {
            console.log(err);
            await t.rollback();

            res.status(400).send({
                status: "failed",
                error: "Error in Authenticationcroller.js",
            });
        }
    },
    async staffDataRegister(req, res) {
        console.log(req.body);
        try {
            const t = await sequelize.transaction();
            const user = await staffInfo.create(req.body, { transaction: t });

            await db.staffLogin.create({
                collegeMailID: req.body.collegeMailID,
                password: "Kongu2022",
            });

            const result = await mailer(collegeMailID);
            console.log("result ", result);
            if (result.status != "success") {
                console.log("error in mail");
                new Error("error");
            }
            console.log({ id: req.body.collegeMailID, trans: t });
            res.status(200).send(user.toJSON());
        } catch (err) {
            console.log(err);
            await t.rollback();
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
                const token = jwtSignUser({ rollnumber });
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
            console.log(req.body);
            const { mailId, password } = req.body;
            const user = await staffLogin.findOne({
                where: {
                    collegeMailID: mailId,
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
                        collegeMailID: user.collegeMailID,
                    },
                });
                const { level } = await permission.findOne({
                    where: {
                        responsibility: userInfo.hostelResponsibility,
                    },
                    attributes: ["level"],
                });
                token = jwtSignUser({ mailId });
                const userJson = userInfo.toJSON();
                const data = {
                    user: userJson,
                    level,
                    viewer: "STAFF",
                    token,
                };
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
            //TODO change password bug
            const { viewer, id, currentPassword, newPassword } = req.body;
            if (viewer == "STUDENT") {
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
            if (viewer == "STAFF") {
                const user = await staffLogin.findOne({ where: { collegeMailID: id } });
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
            let data;
            const decode = jwt.verify(req.token, config.authentication.jwtSecret);
            if (decode.rollnumber) {
                const user = await studentInfo.findOne({
                    where: {
                        rollnumber: decode.rollnumber,
                    },
                });
                const userJson = user.toJSON();
                data = {
                    user: userJson,
                    viewer: "STUDENT",
                };
            }
            if (decode.mailId) {
                const userInfo = await staffInfo.findOne({
                    collegeMailID: decode.mailId,
                });

                const { level } = await permission.findOne({
                    where: {
                        responsibility: userInfo.hostelResponsibility,
                    },
                    attributes: ["level"],
                });
                const userJson = userInfo.toJSON();
                data = {
                    user: userJson,
                    level,
                    viewer: "STAFF",
                };
            }
            res.status(200).send({
                status: "success",
                data,
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