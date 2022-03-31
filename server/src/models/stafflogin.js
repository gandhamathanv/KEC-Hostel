/* eslint-disable */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("stafflogin", {
        mailID: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        password: {
            type: DataTypes.STRING,
        },
        staffID: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
    });
};