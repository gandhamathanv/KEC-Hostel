/* eslint-disable */
const AuthenticationController = require("./controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./policies/AunthenticationcontrollerPolicy");
module.exports = (app) => {
    app.post(
            "/studentRegister",
            AuthenticationControllerPolicy.studentRegister,
            AuthenticationController.studentRegister
        ),
        app.post("/staffRegister", AuthenticationController.staffRegister),
        app.post("/studentLogin", AuthenticationController.studentLogin),
        app.post("/staffLogin", AuthenticationController.staffLogin);
    // app.post("/getRooms", AuthenticationController.BookingStats);
    app.get("/getRooms", (req, res) => {
        console.log(req);
        res.send({
            data: "ganshds",
        });
    });
};