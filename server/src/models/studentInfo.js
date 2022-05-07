/* eslint-disable */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "studentInfo", {
            // photo: DataTypes.TEXT,
            name: DataTypes.STRING,
            rollnumber: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            class: DataTypes.INTEGER,
            year: DataTypes.INTEGER,
            department: DataTypes.STRING,
            DOB: DataTypes.DATEONLY,
            bloodGroup: DataTypes.STRING,

            hostelName: DataTypes.STRING,
            roomNumber: DataTypes.STRING,
            gender: DataTypes.STRING,
            phoneNumber: DataTypes.BIGINT,
            whatsappNumber: DataTypes.BIGINT,
            telegramNumber: DataTypes.BIGINT,
            collegeMailID: DataTypes.STRING,
            personalMailID: DataTypes.STRING,
            aadharNumber: DataTypes.BIGINT,
            fatherName: DataTypes.STRING,
            fatherMobileNumber: DataTypes.BIGINT,
            fatherOccupation: DataTypes.STRING,
            motherName: DataTypes.STRING,
            motherMobileNumber: DataTypes.BIGINT,
            MotherOccupation: DataTypes.STRING,
            address: DataTypes.TEXT,
            district: DataTypes.STRING,
            state: DataTypes.STRING,
            localGuardian: DataTypes.STRING,
            localGuardianPhoneNumber: DataTypes.BIGINT,
            accountNumber: DataTypes.BIGINT,
            bankName: DataTypes.STRING,
            branch: DataTypes.STRING,
            IFSCcode: DataTypes.STRING,
            dateOfEntry: DataTypes.DATEONLY,
            dateOfVacation: DataTypes.DATEONLY,
        }, {
            timestamps: false,
        }
    );
};