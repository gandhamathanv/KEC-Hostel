/* eslint-disable */
const Joi = require("joi");

module.exports = {
    register(req, res, next) {
        const schema = Joi.object({
            rollnumber: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8}$")),
            password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,32}$")),
        });
        const { error, value } = schema.validate(req.body);
        if (error) {
            switch (error.details[0].context.key) {
                case "rollnumber":
                    res.status(400).send({
                        error: "invalid rollnumber",
                    });
                    break;
                case "password":
                    res.status(400).send({
                        error: `password can only contain:
                            <br>
                            1.lowercase,uppercase,numerics
                            <br>
                            2.only 8 to 32`,
                    });
                    break;
                default:
                    console.log(error);
                    res.status(400).send({
                        error: "error in validator",
                    });
            }
        } else {
            next();
        }
    },
};