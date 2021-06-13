const Joi = require('joi');

class SubjectValidator
{
    static subjectSchema()
    {
        const schema = Joi.object({
            subject_id: Joi.number().min(1).required(),
            subject_code: Joi.string().min(1).max(20).required(),
            subject_name: Joi.string().min(1).max(20).required(),
        });
        return schema;
    }
}
module.exports = SubjectValidator;
