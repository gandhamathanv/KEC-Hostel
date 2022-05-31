/* eslint-disable */
const {
  staffInfo,
  staffLogin,
  studentInfo,
  studentLogin,
  permission,
  booking,
  hostelinfo,
  hostelRooms,
} = require("../models");
module.exports = {
  async getStudentList(req, res) {
    try {
      const data = await studentInfo.findAll({
        attributes: [
          "name",
          "rollnumber",
          "year",
          "department",
          "hostelName",
          "gender",
        ],
      });
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
  async getStaffList(req, res) {
    try {
      const data = await staffInfo.findAll({
        attributes: ["name", "department", "hostelName", "gender"],
      });
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
  async getBookingList(req, res) {
    try {
      const data = await booking.findAll();
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
  async getRoomsList(req, res) {
    try {
      const data = await hostelRooms.findAll();
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
  async getHostelList(req, res) {
    try {
      const data = await hostelinfo.findAll();
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
