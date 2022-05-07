/* eslint-disable */
const {
    hostelinfo,
    hostelpermission,
    studentInfo,
    hostelrooms,
    hostelfor,
    foodmenu,
    notification,
} = require("../models");
const Promise = require("bluebird");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

module.exports = {
    async check(req, res) {
        try {
            res.status(200).send({
                status: "Success",
            });
        } catch (err) {
            res.status(200).send({
                status: "failed",
            });
        }
    },
    async getRooms(req, res) {
        try {
            const { hostelName } = req.body;
            console.log(req.body);
            const data = await hostelrooms.findAll({
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
    async getHostels(req, res) {
        try {
            const { year, gender } = req.body;
            console.log(year, gender);
            const hostel = await hostelfor.findAll({
                where: {
                    year,
                    gender,
                },
                include: [{
                    model: hostelpermission,
                    where: {
                        booking: true,
                    },
                    attributes: [],
                }, ],
                attributes: ["hostelName"],
            });
            const data = hostel;
            if (hostel.length == 0) {
                console.log("booking");
                res.status(200).send({
                    status: "Closed",
                });
            } else {
                res.status(200).send({
                    status: "Success",
                    data,
                });
            }
        } catch (err) {
            console.log(err);
            res.status(500).send({
                error: "Error in server",
            });
        }
    },
    async getMenu(req, res) {
        try {
            const { day } = req.body;
            const menu = await foodmenu.findAll({
                where: {
                    day,
                },
            });
            res.status(200).send({
                status: "Success",
                menu,
            });
        } catch (err) {
            console.log(err);
            res.status(500).send({
                error: "Error in server",
            });
        }
    },
    async getNoti(req, res) {
        try {
            const data = await notification.findAll({});

            res.status(200).send({
                status: "Success",
                data,
            });
        } catch (err) {
            console.log(err);
            res.status(500).send({
                error: "Error in server",
            });
        }
    },
    async createNoti(req, res) {
        try {
            const { by, message } = req.body;
            const data = await notification.create({
                by,
                message,
                data: new Date(),
            });

            res.status(200).send({
                status: "Success",
                data,
            });
        } catch (err) {
            console.log(err);
            res.status(500).send({
                error: "Error in server",
            });
        }
    },
    async getStaffDash(req, res) {
        try {
            const decode = jwt.verify(req.token, config.authentication.jwtSecret);
            console.log(decode);
            const studentCount = await studentInfo.count();
            const roomCount = await hostelrooms.count();
            const noti = await notification.findAll({});
            res.status(200).send({
                status: "success",
                data: { studentCount, roomCount, noti },
            });
        } catch (err) {
            console.log(err);
            res.status(403).send({
                status: "failed",
            });
        }
    },
    async getPermission(req, res) {
        const { level, hostelName } = req.body;
        let data;
        switch (level) {
            case 0:
                data = await hostelpermission.findAll();
                break;
            case 1:
                data = await hostelpermission.findOne({
                    where: {
                        hostelName,
                    },
                });
                break;
            case 2:
                console.log(level);
                break;

            default:
                res.status(403).send({
                    status: "failed",
                    message: "level miss match",
                });
                break;
        }
        console.log(data);
        res.status(200).send({
            status: "success",
            data,
        });
    },
    async setPermission(req, res) {
        // console.log(req);
        try {
            const { hostelName, change, value } = req.body;

            console.log(hostelName, change, value);
            if (change == "booking") {
                const response = await hostelpermission.update({
                    booking: value,
                }, {
                    where: {
                        hostelName,
                    },
                });
            } else if (change == "registration") {
                const response = await hostelpermission.update({
                    registration: value,
                }, {
                    where: {
                        hostelName,
                    },
                });
            }
            res.status(200).send({
                status: "success",
            });
        } catch (err) {
            res.status(403).send({
                status: "failed",
            });
        }
    },
    async closePermission(req, res) {
        // console.log(req);
        try {
            const { change, value } = req.body;
            await hostelpermission.findAll().then((data) => {
                data.forEach((ele) => {
                    if (change == "booking") {
                        ele.update({
                            booking: value,
                        });
                    } else if (change == "registration") {
                        ele.update({
                            registration: value,
                        });
                    }
                });
                res.status(200).send({
                    status: "success",
                });
            });
            // console.log(hostelName, change, value);
        } catch (err) {
            console.log(err);
            res.status(403).send({
                status: "failed",
            });
        }
    },
};