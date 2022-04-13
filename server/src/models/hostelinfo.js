/* eslint-disable */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "hostelinfo", {
            hostelName: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            floor: {
                type: DataTypes.INTEGER,
            },
            rooms: {
                type: DataTypes.INTEGER,
            },
            capacity: {
                type: DataTypes.INTEGER,
            },
            availability: {
                type: DataTypes.INTEGER,
            },
            facility: {
                type: DataTypes.STRING,
            },
        }, {
            timestamps: false,
        }
    );
};