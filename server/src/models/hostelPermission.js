/* eslint-disable */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "hostelpermission", {
            hostelName: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            booking: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            registration: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        }, {
            timestamps: false,
        }
    );
};