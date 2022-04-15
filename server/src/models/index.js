/* eslint-disable */
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../config/config");

const db = {};

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
);

fs.readdirSync(__dirname)
    .filter((file) => file !== "index.js")
    .forEach((file) => {
        // console.log(path.join(__dirname, file));
        // const model = equelize.import(path.join(__dirname, file))
        const model = require(path.join(__dirname, file))(
            sequelize,
            Sequelize.DataTypes
        );
        db[model.name] = model;
    });

// //foreign keys
// // hostelName--->hostelinfo-hostelrooms
// db.hostelinfo.hasMany(db.hostelrooms, {
//     foreignKey: "hostelName",
//     sourceKey: "hostelName",
// });
// db.hostelrooms.belongsTo(db.hostelinfo, {
//     foreignKey: "hostelName",
//     targetKey: "hostelName",
// });
// // hostelName--->hostelinfo-hostelrooms

// db.hostelinfo.hasMany(db.studentInfo, {
//     foreignKey: "hostelName",
//     sourceKey: "hostelName",
// });
// db.studentInfo.belongsTo(db.hostelinfo, {
//     foreignKey: "hostelName",
//     targetKey: "hostelName",
// });
// // hostelName--->hostelinfo-hostelrooms

// db.hostelinfo.hasMany(db.staffInfo, {
//     foreignKey: "hostelName",
//     sourceKey: "hostelName",
// });
// db.staffInfo.belongsTo(db.hostelinfo, {
//     foreignKey: "hostelName",
//     targetKey: "hostelName",
// });
// // hostelName--->hostelinfo-hostelrooms

// db.hostelinfo.hasMany(db.booking, {
//     foreignKey: "hostelName",
//     sourceKey: "hostelName",
// });
// db.booking.belongsTo(db.hostelinfo, {
//     foreignKey: "hostelName",
//     targetKey: "hostelName",
// });
// // roomNumber--->hostelinfo-hostelrooms

// db.hostelrooms.hasMany(db.booking, {
//     foreignKey: "roomNumber",
//     sourceKey: "roomNumber",
// });
// db.booking.belongsTo(db.hostelrooms, {
//     foreignKey: "roomNumber",
//     targetKey: "roomNumber",
// });
// // roomNumber--->hostelinfo-hostelrooms

// db.hostelrooms.hasMany(db.staffInfo, {
//     foreignKey: "roomNumber",
//     sourceKey: "roomNumber",
// });
// db.staffInfo.belongsTo(db.hostelrooms, {
//     foreignKey: "roomNumber",
//     targetKey: "roomNumber",
// });
// // roomNumber--->hostelinfo-hostelrooms

// db.hostelrooms.hasMany(db.studentInfo, {
//     foreignKey: "roomNumber",
//     sourceKey: "roomNumber",
// });
// db.studentInfo.belongsTo(db.hostelrooms, {
//     foreignKey: "roomNumber",
//     targetKey: "roomNumber",
// });
// db.studentInfo.hasOne(db.studentLogin, {
//     foreignKey: "rollnumber",
//     sourceKey: "rollnumber",
// });
// db.studentLogin.belongsTo(db.studentInfo, {
//     foreignKey: "rollnumber",
//     targetKey: "rollnumber",
// });
// db.staffInfo.hasMany(db.staffLogin);
// console.log(db);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;