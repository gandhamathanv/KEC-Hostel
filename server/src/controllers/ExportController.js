/* eslint-disable */
const {
  staffInfo,
  staffLogin,
  studentInfo,
  studentLogin,
  permission,
  booking,
  hostelinfo,
  hostelrooms,
} = require("../models");
module.exports = {
  async StudentData(req, res) {
    try {
      const data = await studentInfo.findAll({});
      res.status(200).send({
        status: "success",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(404).send({
        status: "failure",
        error: "cannot get data",
      });
    }
  },
  async StaffData(req, res) {
    try {
      const data = await staffInfo.findAll({});
      res.status(200).send({
        status: "success",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(404).send({
        status: "failure",
        error: "cannot get data",
      });
    }
  },
  async BookingData(req, res) {
    try {
      const data = await booking.findAll({});
      res.status(200).send({
        status: "success",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(404).send({
        status: "failure",
        error: "cannot get data",
      });
    }
  },
  async RoomsData(req, res) {
    try {
      const data = await hostelrooms.findAll({});
      res.status(200).send({
        status: "success",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(404).send({
        status: "failure",
        error: "cannot get data",
      });
    }
  },
};
