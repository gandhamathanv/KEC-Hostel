/* eslint-disable */
console.log("haii");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { sequelize } = require("./models");
// const sequel = require('./models');
const config = require("./config/config");
const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

require("./routes")(app);
sequelize.sync().then(() => {
    app.listen(config.PORT || 3000);
    console.log(`server started on port ${config.PORT}`);
});