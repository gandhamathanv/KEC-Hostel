/* eslint-disable */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("studentlogin", {
        rollnumber: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        password: {
            type: DataTypes.STRING,
        },
    });
};