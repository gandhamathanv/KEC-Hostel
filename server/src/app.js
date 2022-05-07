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
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

require("./routes")(app);

sequelize
    .sync({ alter: true })
    // .sync()
    // .then(() => {
    //     const { models } = sequelize;
    //     models.staffInfo.create({
    //         name: "Jeevitha",
    //         staffID: "34567",
    //         designation: "staff",
    //         hostelResponsibility: "DEPUTY WARDEN",
    //         department: "cse",
    //         gender: "Female",
    //         bloodGroup: "O+ve",
    //         phoneNumber: 6369678903,
    //         whatsappNumber: 9790234234,
    //         collegeMailID: "jeevitacse@kongu.edu",
    //         personalMailID: "jeevita@gmail.com",
    //         aadharNumber: 123456785674,
    //     });
    // })
    // .then(() => data())

.then(() => {
    app.listen(config.PORT || 3000);
    console.log(`server started on port ${config.PORT}`);
});