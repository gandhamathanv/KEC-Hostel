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
            // AuthenticationControllerPolicy.studentRegister,
            AuthenticationController.studentRegister
        ),
        app.post(
            "/studentDataRegister",
            AuthenticationController.studentDataRegister
        ),
        app.post("/getPermissions", HostelController.getPermission),
        app.patch("/setPermissions", HostelController.setPermission),
        app.patch("/closePermissions", HostelController.closePermission),
        app.post("/staffRegister", AuthenticationController.staffRegister),
        app.post("/studentLogin", AuthenticationController.studentLogin),
        app.post("/staffLogin", AuthenticationController.staffLogin),
        app.post("/changePassword", AuthenticationController.changePassword),
        app.post("/getRooms", HostelController.getRooms); //get
    app.post("/getHostels", HostelController.getHostels); //get
    app.post("/getMenu", HostelController.getMenu); //get

    //notifiaction
    app.get("/getNotification", HostelController.getNoti); //get
    app.post("/createNotification", HostelController.createNoti); //get

    app.get(
        "/getStaffDash",
        basicTokenPolicies.getToken,
        HostelController.getStaffDash
    ); //get

    //check
    app.get("/check", basicTokenPolicies.getToken, HostelController.check); //get
    app.get("/logout", AuthenticationController.logout); //get
};