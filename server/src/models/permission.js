/* eslint-disable */
module.exports = (sequelize, DataTypes) => {
    const permission = sequelize.define(
        "permission", {
            responsibility: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            bookingPermission: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            studentRegistration: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            changePermissions: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            level: {
                type: DataTypes.INTEGER,
                defaultValue: 2,
            },
        }, {
            timestamps: false,
        }
    );
    permission.associate = function(models) {
        console.log(models);
        permission.hasOne(models.staffInfo);
    };
    return permission;
};