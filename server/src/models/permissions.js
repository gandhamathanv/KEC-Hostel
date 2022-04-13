/* eslint-disable */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("permissions", {
        responsibility: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        changePermissions: {
            type: DataTypes.BOOLEAN,
        },
    }, {
        timestamps: false,
    });
};