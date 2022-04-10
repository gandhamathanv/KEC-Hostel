/* eslint-disable */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("hostelbookingstatus", {
        hostelName: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        booking: {
            type: DataTypes.BOOLEAN,
        },
    });
};