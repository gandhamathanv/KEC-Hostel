/* eslint-disable */
const Joi = require("joi");

module.exports = {
    studentRegister(req, res, next) {
        const schema = Joi.object({
            collegeMailID: Joi.string().email({
                minDomainSegments: 2,
                // tlds: { allow: ["kongu.edu"] },
            }),
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
    staffRegister(req, res, next) {
        console.log("data lofddes");
        const schema = Joi.object({
            mailID: Joi.string().email({
                minDomainSegments: 2,
                // tlds: { allow: ["kongu.edu"] },
            }),
            password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,32}$")),
            staffID: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{10}$")),
        });
        const { error, value } = schema.validate(req.body);
        if (error) {
            switch (error.details[0].context.key) {
                case "mailID":
                    res.status(400).send({
                        error: "invalid kongu mail id",
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
                case "staffID":
                    res.status(400).send({
                        error: `id can onlu be 10
                            `,
                    });
                    break;
                default:
                    console.log(error);
                    res.status(400).send({
                        error: "error in validator",
                    });
            }
        } else {
            console.log("gadhaa");
            next();
        }
    },
};