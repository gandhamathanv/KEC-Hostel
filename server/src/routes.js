/* eslint-disable */
const AuthenticationController = require("./controllers/AuthenticationController");
const AuthenticationControllerPolicy = require("./policies/AunthenticationcontrollerPolicy");
const basicTokenPolicies = require("./policies/basicTokenPolicies");
const HostelController = require("./controllers/HostelController");
const DetailsController = require("./controllers/DetailsController");
const ExportController = require("./controllers/ExportController");
module.exports = (app) => {
  app.get(
    "/getData",
    basicTokenPolicies.getToken,
    AuthenticationController.sentToken
  ),
    app.post(
      "/studentDataRegister",
      basicTokenPolicies.getToken,
      AuthenticationController.studentDataRegister
    ),
    app.post(
      "/staffDataRegister",
      basicTokenPolicies.getToken,
      AuthenticationController.staffDataRegister
    ),
    app.post(
      "/getPermissions",
      basicTokenPolicies.getToken,
      HostelController.getPermission
    ),
    app.patch(
      "/setPermissions",
      basicTokenPolicies.getToken,
      HostelController.setPermission
    ),
    app.patch(
      "/closePermissions",
      basicTokenPolicies.getToken,
      HostelController.closePermission
    ),
    app.post(
      "/studentLogin",
      basicTokenPolicies.getToken,
      AuthenticationController.studentLogin
    ),
    app.post(
      "/staffLogin",
      basicTokenPolicies.getToken,
      AuthenticationController.staffLogin
    ),
    app.post(
      "/changePassword",
      basicTokenPolicies.getToken,
      AuthenticationController.changePassword
    ),
    app.post(
      "/getRooms",
      basicTokenPolicies.getToken,
      HostelController.getRooms
    ); //get
  app.post(
    "/getHostels",
    basicTokenPolicies.getToken,
    HostelController.getHostels
  ); //get
  app.post("/getMenu", basicTokenPolicies.getToken, HostelController.getMenu); //get

  //notifiaction
  app.get(
    "/getNotification",
    basicTokenPolicies.getToken,
    HostelController.getNoti
  ); //get
  app.post(
    "/createNotification",
    basicTokenPolicies.getToken,
    HostelController.createNoti
  ); //get

  app.get(
    "/getStaffDash",
    basicTokenPolicies.getToken,
    HostelController.getStaffDash
  ); //get

  //check
  app.get("/check", basicTokenPolicies.getToken, HostelController.check); //get
  app.get(
    "/logout",
    basicTokenPolicies.getToken,
    AuthenticationController.logout
  ); //get

  //
  app.get(
    "/getStudentsList",
    basicTokenPolicies.getToken,
    DetailsController.getStudentList
  );
  app.get(
    "/getStaffList",
    basicTokenPolicies.getToken,
    DetailsController.getStaffList
  );
  app.get(
    "/getBookingList",
    basicTokenPolicies.getToken,
    DetailsController.getBookingList
  );
  app.get(
    "/getHostelList",
    basicTokenPolicies.getToken,
    DetailsController.getHostelList
  );
  app.get(
    "/getRoomsList",
    basicTokenPolicies.getToken,
    DetailsController.getRoomsList
  );
  app.get(
    "/getStudentInfo/:rollnumber",
    basicTokenPolicies.getToken,
    DetailsController.getStudentInfo
  );
  app.get(
    "/getStaffInfo/:staffID",
    basicTokenPolicies.getToken,
    DetailsController.getStaffInfo
  );

  //conformation mail
  app.get("/confirmation/:jwt", AuthenticationController.confirmation);

  //export data
  app.get(
    "/export/StudentData",
    basicTokenPolicies.getToken,
    ExportController.StudentData
  );
  app.get(
    "/export/StaffData",
    basicTokenPolicies.getToken,
    ExportController.StaffData
  );
  app.get(
    "/export/BookingData",
    basicTokenPolicies.getToken,
    ExportController.BookingData
  );
  app.get(
    "/export/RoomsData",
    basicTokenPolicies.getToken,
    ExportController.RoomsData
  );
};
