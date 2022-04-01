/* eslint-disable */
const Promise = require("bluebird");
const bcrypt = Promise.promisifyAll(require("bcrypt-nodejs"));

function hashPassword(user, options) {
    const SALT_FACTOR = 8;
    if (!user.changed("password")) {
        return;
    }
    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then((salt) => bcrypt.hashAsync(user.password, salt, null))
        .then((hash) => {
            console.log(hash);
            user.setDataValue("password", hash);
            console.log(user.password);
        });
}
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "staffLogin", {
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
        }, {
            hooks: {
                // beforeCreate: hashPassword,
                // beforeUpdate: hashPassword,
                beforeSave: hashPassword,
            },
        }
    );
    User.prototype.comparePassword = function(pass) {
        // console.log(pass, this.password);
        return bcrypt.compareAsync(pass, this.password);
    };
    return User;
};