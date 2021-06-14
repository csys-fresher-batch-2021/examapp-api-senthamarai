const Joi = require('joi');

class AdminValidator
{
    static adminSchema()
    {
        const schema = Joi.object({
            admin_id: Joi.number().min(1).required(),
            firstname: Joi.string().min(1).max(20).required(),
            lastname: Joi.string().min(1).max(20).required(),
            email: Joi.string().email().required(),
            organization_name: Joi.string().min(2).max(100).required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,20}$/).required(),
        });
        return schema;
    }
}

module.exports = AdminValidator;