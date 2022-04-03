/* eslint-disable */
const AuthenticationController = require("./controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./policies/AunthenticationcontrollerPolicy");
const HostelController = require("./controllers/HostelController");
module.exports = (app) => {
    app.post(
            "/studentRegister",
            AuthenticationControllerPolicy.studentRegister,
            AuthenticationController.studentRegister
        ),
        app.post("/staffRegister", AuthenticationController.staffRegister),
        app.post("/studentLogin", AuthenticationController.studentLogin),
        app.post("/staffLogin", AuthenticationController.staffLogin),
        app.post("/getRooms", HostelController.getRooms); //get
    app.post("/getHostels", HostelController.getHostels); //get
};