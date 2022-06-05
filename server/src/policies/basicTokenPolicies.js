/* eslint-disable */
const config = require("../config/config");

module.exports = {
  getToken(req, res, next) {
    try {
      const token = req.headers.authorization;
      console.log(token);
      console.log(req.cookies);
      console.log(res.cookies);
      console.log(req.cookie);
      console.log(res.cookie);
      req.token = token.split(" ")[1];
    } catch (err) {
      res.status(400)({
        status: "failed",
      });
    }

    next();
  },
};
