/* eslint-disable */
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const config = require("./config/config");
getCode = () => Math.floor(100000 + Math.random() * 900000);
const oAuth2client = new google.auth.OAuth2(
    config.mailer.CLIENT_ID,
    config.mailer.CLIENT_SECRET,
    config.mailer.REDIRECT_URL
);
oAuth2client.setCredentials({ refresh_token: config.mailer.REFRESH_TOKEN });

module.exports = async function sentMail(data) {
    const mailId = data;
    console.log(mailId);
    try {
        const accessToken = await oAuth2client.getAccessToken();
        const AuthCode = getCode();
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "kechostel@gmail.com",
                clientId: config.mailer.CLIENT_ID,
                clientSecret: config.mailer.CLIENT_SECRET,
                refreshToken: config.mailer.REFRESH_TOKEN,
                accessToken: accessToken,
            },
            connectionTimeout: 5 * 60 * 1000,
        });
        const mailOptions = {
            from: "KEC HOSTEL <kechostel@gmail.com>",
            to: `${mailId}`,
            subject: "Authentication mail",
            text: "your file is aunthecated",
            html: `<p>your login is Authentication code is <h1> ${AuthCode} </h1></p>`,
        };
        const result = await transport.sendMail(mailOptions);
        result.authCode = AuthCode;

        return result;
    } catch (error) {
        console.log("error", error);
        return error;
    }
};