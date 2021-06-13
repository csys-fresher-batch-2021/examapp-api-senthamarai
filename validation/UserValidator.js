const Joi = require('joi');

class UserValidator
{
    static userSchema()
    {
        const schema = Joi.object({
            user_id: Joi.number().min(1).required(),
            firstname: Joi.string().min(1).max(20).required(),
            lastname: Joi.string().min(1).max(20).required(),
            email: Joi.string().email().required(),
            organization_name: Joi.string().min(2).max(100).required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,20}$/).required(),
        });
        return schema;
    }

    static passwordSchema()
    {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,20}$/).required(),
        });
        return schema;
    }
}
module.exports = UserValidator;
