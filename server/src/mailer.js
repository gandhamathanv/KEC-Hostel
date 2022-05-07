/* eslint-disable */
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const config = require("./config/config");
const code = require("./del");
console.log(code.getCode());
// const oAuth2client = new google.auth.OAuth2(
//     config.mailer.CLIENT_ID,
//     config.mailer.CLIENT_SECRET,
//     config.mailer.REDIRECT_URL
// );
// oAuth2client.setCredentials({ refresh_token: config.mailer.REFRESH_TOKEN });

// async function sentMail() {
//     try {
//         const accessToken = await oAuth2client.getAccessToken();
//         const transport = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 type: "OAuth2",
//                 user: "kechostel@gmail.com",
//                 clientId: config.mailer.CLIENT_ID,
//                 clientSecret: config.mailer.CLIENT_SECRET,
//                 refreshToken: config.mailer.REFRESH_TOKEN,
//                 accessToken: accessToken,
//             },
//         });
//         const mailOptions = {
//             from: "KEC HOSTEL <kechostel@gmail.com>",
//             to: "aanandhenem.20cse@kongu.edu",
//             subject: "Authentication mail",
//             text: "your file is aunthecated",
//             html: "<h1>your login is created success fully</h1>",
//         };
//         const result = await transport.sendMail(mailOptions);
//         return result;
//     } catch (error) {
//         return error;
//     }
// }
// sentMail()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });