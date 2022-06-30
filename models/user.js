const joi = require("@hapi/joi");

const userSchema = joi.object({ 
    login: joi.string().required().alphanum(),
    password: joi.string().required().alphanum().min(6),
    age: joi.number().required().min(4).max(130),
});

module.exports = {
    userSchema: userSchema,
}
