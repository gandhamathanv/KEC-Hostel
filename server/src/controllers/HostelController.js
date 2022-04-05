/* eslint-disable */
const {
    hostelinfo,
    hostelrooms,
    hostelfor,
    foodmenu,
    notification,
} = require("../models");
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
        try {
            const { year, gender } = req.body;
            console.log(year, gender);
            const user = await hostelfor.findAll({
                where: {
                    year,
                    gender,
                },
                attributes: ["hostelName"],
            });
            const isbooking = true;
            if (!isbooking) {
                console.log("booking");
                res.status(200).send({
                    status: "Closed",
                });
            } else {
                res.status(200).send({
                    status: "Success",
                    data: user,
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
};