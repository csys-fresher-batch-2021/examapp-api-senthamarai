const Joi = require('joi');
const QuestionDao = require('../dao/QuestionDao.js');
const QuestionValidator = require('../validation/QuestionValidator.js');
class QuestionService 
{
    /**
     * Function add question to data.
     * @param {*} question
     */
    static addNewQuestion(question)
    {
        const result = QuestionValidator.questionSchema().validate(question);
        if(result.error != null)
        {
            throw new Error(result.error);
        }
        else
        {
            return QuestionDao.addNewQuestion(question);
        }
            
    }
}
module.exports = QuestionService;
