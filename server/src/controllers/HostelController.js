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
        let hostelData;
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
    async getStaffDash(req, res) {
        const decode = jwt.verify(req.token, config.authentication.jwtSecret);
        console.log(decode);
        const studentCount = await studentInfo.count();
        const roomCount = await hostelrooms.count();
        res.status(200).send({
            status: "success",
            data: { studentCount, roomCount },
        });
    },
};