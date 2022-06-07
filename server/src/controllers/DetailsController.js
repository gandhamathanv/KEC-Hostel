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
const jwt = require("jsonwebtoken");
const config = require("../config/config");

module.exports = {
  async getStudentList(req, res) {
    try {
      const decode = jwt.verify(req.token, config.authentication.jwtSecret);
      console.log(decode);
      if (decode.viewer !== "STAFF") {
        res.status(403).send({
          status: "failed",
          message: "you are not Authorized",
        });
      } else if (decode.viewer === "STAFF") {
        if (decode.level === 0) {
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
        } else if (
          decode.level === 1 ||
          decode.level === 2 ||
          decode.level === 3
        ) {
          const data = await studentInfo.findAll({
            where: {
              hostelName: decode.hostelName,
            },
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
        }
      }
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
          "hostelResponsibility",
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
      const decode = jwt.verify(req.token, config.authentication.jwtSecret);
      if (decode.viewer !== "STAFF") {
        res.status(403).send({
          status: "failed",
          message: "you are not Authorized",
        });
      } else if (decode.viewer === "STAFF") {
        if (decode.level === 0) {
          const data = await hostelinfo.findAll();
          res.status(200).send({
            status: "success",
            data: data,
          });

          res.status(200).send({
            status: "success",
            data: data,
          });
        } else if (
          decode.level === 1 ||
          decode.level === 2 ||
          decode.level === 3
        ) {
          const data = await hostelinfo.findAll({
            where: {
              hostelName: decode.hostelName,
            },
          });
          res.status(200).send({
            status: "success",
            data: data,
          });
        }
      }

      //FIXME:
    } catch (err) {
      console.log(err);
      res.status(404).send({
        status: "failure",
        error: "cannot get data",
      });
    }
  },
};
