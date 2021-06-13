const Joi = require('joi');

class QuestionValidator
{
    static questionSchema()
    {
        const schema = Joi.object({
            question_id: Joi.number().min(1).required(),
            subject_code: Joi.string().min(1).max(20).required(),
            subject_name: Joi.string().min(1).max(20).required(),
            question: Joi.string().min(1).max(1000).required(),
            option1: Joi.string().min(1).max(500).required(),
            option2: Joi.string().min(1).max(500).required(),
            option3: Joi.string().min(1).max(500).required(),
            option4: Joi.string().min(1).max(500).required(),
            answer: Joi.string().min(1).max(500).required(),
            active: Joi.string().min(1).max(10).required(),
        });
        return schema;
    }
}
module.exports = QuestionValidator;
