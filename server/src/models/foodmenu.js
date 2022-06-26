/* eslint-disable */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "foodmenu", {
            date: {
                type: DataTypes.DATEONLY,
                primaryKey: true,
            },
            breakfast: {
                type: DataTypes.STRING,
            },
            lunch: {
                type: DataTypes.STRING,
            },
            eveningSnacks: {
                type: DataTypes.STRING,
            },
            dinner: {
                type: DataTypes.STRING,
            },
        }, {
            timestamps: false,
        }
    );
};