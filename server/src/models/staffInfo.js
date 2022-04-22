/* eslint-disable */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "staffInfo", {
            name: DataTypes.STRING,
            staffID: {
                type: DataTypes.STRING,
                primaryKey: true,
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
        }
    );
};