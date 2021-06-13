const pool = require('../dao/connection.js');
class QuestionDao 
{
    /**
     * Function to add new question to database.
     * @param {*} question
     */
    static async addNewQuestion(question) 
    {
        let questionData = [
            question.question_id, 
            question.subject_code, 
            question.subject_name,
            question.question,
            question.option1,
            question.option2,
            question.option3,
            question.option4,
            question.answer,
            question.active
        ];
        let queryQuestion = 'INSERT INTO questions(question_id, subject_code, subject_name, question, option1, option2, option3, option4, answer,active) VALUES ($1, $2, $3, $4, $5 ,$6 ,$7, $8, $9, $10)';
        try 
        {
            const client = await pool.connect();
            const result = await client.query(queryQuestion, questionData);
            client.release();
            return result;
        } 
        catch (error)
        {
            console.log(error);
        }
    }

    /**
     * Function to display all questions from the database
     */
    static async showQuestionsList() 
    {
        let questionQuery = 'SELECT question, option1, option2, option3, option4 FROM questions';
        try
        {
            const client = await pool.connect();
            const result = await client.query(questionQuery);
            client.release();
            console.log(result);
            return result.rows;
        }
        catch (error) 
        {
            console.log(error);
        }
    }

    /**
     * Function to get a question details by using id.
     * @param {*} question_id 
     */
    static async getQuestion(question_id)
    {
        let params = [question_id];
        let getQuestion = 'SELECT question, option1, option2, option3, option4 FROM questions WHERE question_id=$1';
        try 
        {
            const client = await pool.connect();
            const result = await client.query(getQuestion, params);
            client.release();
            return result;
        } 
        catch (err) 
        {
            console.log(err);
        }
    }
}
module.exports = QuestionDao;