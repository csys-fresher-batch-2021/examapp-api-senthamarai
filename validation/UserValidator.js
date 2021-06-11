const Joi = require('joi');

class UserValidator
{
    static userSchema()
    {
        const schema = Joi.object({
            name: Joi.string().min(2).max(20).required(),
            number: Joi.number().min(1).max(300).required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,20}$/).required(), 
        });
        return schema;
    }
}
module.exports = UserValidator;
