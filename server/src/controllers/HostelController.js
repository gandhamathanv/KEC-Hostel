/* eslint-disable */
const {
    hostelinfo,
    staffInfo,
    studentInfo,
    hostelrooms,
    hostelfor,
    foodmenu,
    notification,
    booking,
} = require("../models");
const { sequelize } = require("../models");
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
                    booking: true,
                },

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
            const studentCount = await studentInfo.count();
            const staffCount = await staffInfo.count();
            const hostelCount = await hostelinfo.count();
            const bookingCount = await booking.count();
            //   const notification = await notification.findAll({});
            // FIXME: notification from database
            const notification = [{}, {}];
            res.status(200).send({
                status: "success",
                data: {
                    studentCount,
                    staffCount,
                    bookingCount,
                    hostelCount,
                    notification,
                },
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
                data = await hostelfor.findAll();
                break;
            case 1:
                data = await hostelfor.findOne({
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
                const response = await hostelfor.update({
                    booking: value,
                }, {
                    where: {
                        hostelName,
                    },
                });
            } else if (change == "registration") {
                const response = await hostelfor.update({
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
            await hostelfor.findAll().then((data) => {
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
    async bookRoom(req, res) {
        // console.log(req);
        const t = await sequelize.transaction();
        try {
            const { roomNumber, rollnumber } = req.body;
            await hostelrooms
                .findOne({
                    where: {
                        roomNumber,
                    },
                })
                .then((room) => {
                    if (room.availability === 0) {
                        throw "room filled";
                    } else {
                        return room;
                    }
                })
                .then(async(room) => {
                    await hostelrooms.decrement(
                        "availability", {
                            where: {
                                roomNumber,
                            },
                        }, { transaction: t }
                    );
                    return room;
                })
                .then(async(room) => {
                    await studentInfo.update({ roomNumber: room.roomNumber, hostelName: room.hostelName }, {
                        where: {
                            rollnumber,
                        },
                    }, { transaction: t });

                    const data = await studentInfo.findOne({
                        where: {
                            rollnumber,
                        },
                    });
                    return { room, data };
                })
                .then(async(snap) => {
                    const today = new Date();

                    const date =
                        today.getFullYear() +
                        "-" +
                        (today.getMonth() + 1) +
                        "-" +
                        today.getDate();
                    const { data, room } = snap;
                    console.log(data);
                    await booking.create({
                        rollnumber,
                        studentName: data.name,
                        department: data.department,
                        year: data.year,
                        amountpaid: 0,
                        bookedDate: date,
                        hostelName: room.hostelName,
                        roomNumber: room.roomNumber,
                    }, { transaction: t });
                    await t.commit();
                    res.status(200).send({
                        status: "success",
                    });
                })
                .catch(async(err) => {
                    await t.rollback();
                    console.log(err);
                    throw err;
                });
        } catch (err) {
            // console.log(hostelName, change, value);
            console.log(err);
            res.status(403).send({
                status: "failed",
                message: err,
            });
        }
    },
};