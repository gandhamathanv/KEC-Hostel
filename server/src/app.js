/* eslint-disable */
console.log("haii");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { sequelize } = require("./models");
const cookieParser = require("cookie-parser");
// const sequel = require('./models');
const config = require("./config/config");
const app = express();
const {
  hostelRoomsData,
  hostelPermissionData,
  hostelInfoData,
  hostelForData,
  permissionData,
  staffInfoData,
  foodmenuData,
} = require("./data");
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
require("./routes")(app);
sequelize
  .sync()
  .then(() => {
    const { models } = sequelize;
    // models.hostelinfo
    //   .bulkCreate(hostelInfoData)
    //   .then(() => {
    //     console.log("hostelinfo daata inserted");
    //   })
    //   .catch((err) => {
    //     console.log("error in hostelinfo");
    //   });
    // models.hostelpermission
    //   .bulkCreate(hostelPermissionData)
    //   .then(() => {
    //     console.log("permission daata inserted");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     console.log("error in hostelpermission");
    //   });
    // models.hostelfor
    //   .bulkCreate(hostelForData)
    //   .then(() => {
    //     console.log("hostelfordata daata inserted");
    //   })
    //   .catch((err) => {
    //     console.log("error in hostelfordata");
    //   });
    // models.permission
    //   .bulkCreate(permissionData)
    //   .then(() => {
    //     console.log("permission daata inserted");
    //   })
    //   .catch((err) => {
    //     console.log("error in permission");
    //   });

    // models.hostelrooms.bulkCreate(hostelRoomsData);
    // models.staffInfo
    //   .bulkCreate(staffInfoData)
    //   .then(() => {
    //     console.log("staffinfo daata inserted");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     console.log("error in staffinfo");
    //   });
    // models.foodmenu
    //   .bulkCreate(foodmenuData)
    //   .then(() => {
    //     console.log("foodmenu daata inserted");
    //   })
    //   .catch((err) => {
    //     console.log("error in foodmenu");
    //   });
  })
  .then(() => {
    app.listen(config.PORT || 3000);
    console.log(`server started on port ${config.PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });
