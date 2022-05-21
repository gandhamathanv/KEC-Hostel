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
const { hostelRoomsData } = require("./data");
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
require("./routes")(app);
sequelize
    .sync()
    .then(() => {
        const { models } = sequelize;
        // models.hostelrooms.bulkCreate(hostelRoomsData);
        // models.hostelpermission.bulkCreate(hostelPermissionData);
        // models.hostelinfo.bulkCreate(hostelInfoData);
        // models.hostelfor.bulkCreate(hostelForData);
        // models.permission.bulkCreate(hostelForData);
        // models.hostelrooms.bulkCreate(hostelRoomsData);
        // models.hostelinfo.bulkCreate(hostelInfoData);
        // models.staffInfo.bulkCreate(staffInfoData);
        // models.foodmenu.bulkCreate(foodmenuData);
    })
    .then(() => {
        app.listen(config.PORT || 3000);
        console.log(`server started on port ${config.PORT}`);
    })
    .catch((err) => {
        console.log(err);
    });