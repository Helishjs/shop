const Joi = require("joi");
const ErrorException = require("../utils/ErrorException");
const UserValidator = (data) =>{
    const schema = Joi.object({
        username: Joi.string().min(3).required(),
        password: Joi.string().min(8).required(),
        email: Joi.string().email().required(),
        phone:Joi.string().min(9).max(12).required()
    });
    const {error} = schema.validate(data);
    if(error){
        throw new ErrorException(error.details[0].message,400);
    }
}
module.exports = { UserValidator};