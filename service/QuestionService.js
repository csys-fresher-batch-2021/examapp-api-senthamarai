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

    /**
     * Function to display all questions from the database
     */
    static getAllQuestions() 
    {
        return QuestionDao.showQuestionsList();  
    }

    /**
     * Function to get a question details by using id.
     * @param {*} id
     */
    static getQuestionDetail(id )
    {
        return QuestionDao.getQuestion(id);
    }

    /**
     * Function to delete a question details by using id.
     * @param {*} id 
     */
    static deleteQuestion(id)
    {
        return QuestionDao.deleteQuestion(id);
    } 

    /**
     * Function to get a question details by subject_code.
     * @param {*} subject_code
     */
    static getQuestionByCode(subject_code)
    {
        return QuestionDao.getQuestionByCode(subject_code);
    }
}
module.exports = QuestionService;
