/* eslint-disable */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("booking", {
        studentRollnumber: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        studentName: {
            type: DataTypes.INTEGER,
        },
        roomNumber: {
            type: DataTypes.STRING,
        },
        hostelName: {
            type: DataTypes.STRING,
        },
        department: {
            type: DataTypes.STRING,
        },
        year: {
            type: DataTypes.INTEGER,
        },
        amountpaid: {
            type: DataTypes.INTEGER,
        },
        bookedDate: {
            type: DataTypes.DATE,
        },
    });
};