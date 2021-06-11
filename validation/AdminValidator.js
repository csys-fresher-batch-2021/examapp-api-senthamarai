const Joi = require('joi');

class AdminValidator
{
    static adminSchema()
    {
        const schema = Joi.object({
            name: Joi.string().min(2).max(20).required(),
            email: Joi.string().email().required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,20}$/).required(), 
        });
        return schema;
    }
}

module.exports = AdminValidator;