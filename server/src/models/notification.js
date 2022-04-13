/* eslint-disable */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("notification", {
        by: {
            type: DataTypes.STRING,
        },
        message: {
            type: DataTypes.TEXT,
        },
        date: {
            type: DataTypes.DATE,
        },
    }, {
        timestamps: false,
    });
};