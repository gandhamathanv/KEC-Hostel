/* eslint-disable */
const AuthenticationController = require("./controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./policies/AunthenticationcontrollerPolicy");
const basicTokenPolicies = require("./policies/basicTokenPolicies");
const HostelController = require("./controllers/HostelController");
module.exports = (app) => {
    app.get(
            "/getData",
            basicTokenPolicies.getToken,
            AuthenticationController.sentToken
        ),
        app.post(
            "/studentRegister",
            AuthenticationControllerPolicy.studentRegister,
            AuthenticationController.studentRegister
        ),
        app.post("/getPermissions", HostelController.getPermission),
        app.post("/staffRegister", AuthenticationController.staffRegister),
        app.post("/studentLogin", AuthenticationController.studentLogin),
        app.post("/staffLogin", AuthenticationController.staffLogin),
        app.post("/changePassword", AuthenticationController.changePassword),
        app.post("/getRooms", HostelController.getRooms); //get
    app.post("/getHostels", HostelController.getHostels); //get
    app.post("/getMenu", HostelController.getMenu); //get
    app.get("/getNotification", HostelController.getNoti); //get

    app.get(
        "/getStaffDash",
        basicTokenPolicies.getToken,
        HostelController.getStaffDash
    ); //get

    //check
    app.get(
        "/check",

        HostelController.check
    ); //get
};