/* eslint-disable */
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "hostelrooms", {
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
            floor: {
                type: DataTypes.INTEGER,
            },
            attachedBathroom: {
                type: DataTypes.BOOLEAN,
            },
            hostelName: {
                type: DataTypes.STRING,
            },
        }, {
            timestamps: false,
        }
    );

    return User;
};