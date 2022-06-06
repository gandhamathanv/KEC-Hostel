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
  async getStudentInfo(req, res) {
    try {
      const rollnumber = req.params.rollnumber;
      const data = await studentInfo.findOne({
        where: {
          rollnumber,
        },
      });
      console.log("data sent");
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
        attributes: [
          "staffID",
          "name",
          "hostelName",
          "gender",
          "responsibility",
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
  async getStaffInfo(req, res) {
    try {
      const staffID = req.params.staffID;
      const data = await staffInfo.findOne({
        where: {
          staffID,
        },
      });
      console.log("data sent");
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
  async getBookingInfo(req, res) {
    try {
      const data = await booking.findOne({
        where: {
          rollnumber: req.params.rollnumber,
        },
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
  async getHostelInfo(req, res) {
    try {
      const data = await hostelinfo.findOne({
        where: {
          hostelName: req.params.hostelName,
        },
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
  async getRoomsList(req, res) {
    try {
      const data = await hostelrooms.findAll({
        where: {
          hostelName: req.params.hostelName,
        },
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
  async getRoomInfo(req, res) {
    try {
      const data = await hostelrooms.findOne({
        where: {
          roomNumber: req.params.roomNumber,
        },
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
