/* eslint-disable */
module.exports = {
    PORT: 8881,
    db: {
        database: process.env.DB_NAME || "kecho",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASS || "",
        options: {
            dialect: process.env.DIALECT || "mysql", //type os the database
            host: process.env.HOST || "localhost",
        },
    },
    // db: {
    //     database: process.env.DB_NAME || "kechostels",
    //     user: process.env.DB_USER || "kechostel",
    //     password: process.env.DB_PASS || "kechostel",
    //     options: {
    //         dialect: process.env.DIALECT || "sqlite", //type os the database
    //         host: process.env.HOST || "localhost",
    //         storage: "./kechostels.sqlite",
    //     },
    // },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || "secret",
    },
};