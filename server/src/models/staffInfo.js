/* eslint-disable */

function CreateLogin(user, options) {
    console.log("createlogin");
    console.log(user.dataValues.collegeMailID);
}
const user = (sequelize, DataTypes) => {
    return sequelize.define(
        "staffInfo", {
            name: DataTypes.STRING,
            staffID: {
                type: DataTypes.STRING,
                unique: true,
            },
            designation: DataTypes.STRING,

            hostelName: DataTypes.STRING,
            roomNumber: DataTypes.STRING,
            hostelResponsibility: DataTypes.STRING,
            department: DataTypes.STRING,
            gender: DataTypes.STRING,
            bloodGroup: DataTypes.STRING,

            phoneNumber: DataTypes.BIGINT,
            whatsappNumber: DataTypes.BIGINT,
            collegeMailID: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            personalMailID: DataTypes.STRING,
            aadharNumber: DataTypes.BIGINT,
        }, {
            timestamps: false,
            hooks: {
                beforeSave: CreateLogin,
                beforeCreate: CreateLogin,
            },
        }
    );
};
module.exports = user;