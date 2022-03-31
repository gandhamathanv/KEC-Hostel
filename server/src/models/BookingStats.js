/* eslint-disable */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("BookingStats", {
        hostelName: {
            type: DataTypes.STRING,
        },
        roomNumber: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        capacity: {
            type: DataTypes.INTEGER,
        },
        availability: {
            type: DataTypes.INTEGER,
        },
        floorNumber: {
            type: DataTypes.INTEGER,
        },
        attachedBathroom: {
            type: DataTypes.BOOLEAN,
        },
    });
};