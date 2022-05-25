/* eslint-disable */
module.exports = {
    PORT: 8881,
    db: {
        database: process.env.DB_NAME || "sql6494136",
        user: process.env.DB_USER || "sql6494136",
        password: process.env.DB_PASS || "AMthJlLDmk",
        options: {
            dialect: process.env.DIALECT || "mysql", //type os the database
            host: process.env.HOST || "sql6.freesqldatabase.com",
        },
    },
    // db: {
    //     database: process.env.DB_NAME || "kecho",
    //     user: process.env.DB_USER || "root",
    //     password: process.env.DB_PASS || "",
    //     options: {
    //         dialect: process.env.DIALECT || "mysql", //type os the database
    //         host: process.env.HOST || "",
    //     },
    // },
    mailer: {
        CLIENT_ID: process.env.CLIENT_ID ||
            "846597000677-v7nc2bp2kbr79lud67fhj3r7nm9llclp.apps.googleusercontent.com",
        CLIENT_SECRET: process.env.CLIENT_SECRET || "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",
        REDIRECT_URL: process.env.REDIRECT_URL ||
            "https://developers.google.com/oauthplayground",
        REFRESH_TOKEN: process.env.REFRESH_TOKEN ||
            "1//04F0detWL3-BkCgYIARAAGAQSNwF-L9Ir_sW9V_NMwz5zXp_8ztE5NUijYFL-CKleqeGq24JlUVCmupfzEGzmu7fKk0d6VGbVzhI",
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