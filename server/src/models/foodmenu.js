/* eslint-disable */
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("foodmenu", {
        day: {
            type: DataTypes.STRING,
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
    });
};