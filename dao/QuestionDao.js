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

     /**
     * Function to delete a question details by using id.
     * @param {*} id 
     */
    static async deleteQuestion(id)
    {
        let params = [id];
        let deleteQuestion = 'DELETE FROM questions WHERE question_id = $1';
        try 
        {
            const client = await pool.connect();
            const result = await client.query(deleteQuestion, params);
           // console.log(result);
            client.release();
            return result.rowCount;
        } catch (error) 
        {
            console.log(error);
        }
    }

    /**
     * Function to get a question details by subject code.
     * @param {*} subject_code 
     */
    static async getQuestionByCode(subject_code)
    {
        let params = [subject_code];
        let getQuestion = 'SELECT question, option1, option2, option3, option4 FROM questions WHERE subject_code=$1';
        try 
        {
            const client = await pool.connect();
            const result = await client.query(getQuestion, params);
            client.release();
            return result.rows;
        } 
        catch (err) 
        {
            console.log(err);
        }
    }

    /**
     * Function to get a question details by subject name.
     * @param {*} subject_name
     */
    static async getQuestionByName(subject_name)
    {
        let params = [subject_name];
        let getQuestion = 'SELECT question, option1, option2, option3, option4 FROM questions WHERE subject_name=$1';
        try 
        {
            const client = await pool.connect();
            const result = await client.query(getQuestion, params);
            client.release();
            return result.rows;
        } 
        catch (err) 
        {
            console.log(err);
        }
    }

    /**
     * Function to a change question details in database.
     * @param {*} updatedDetails
     */
    static async updateQuestion(updatedDetails)
    {
        let params = [
            updatedDetails.question_id,
            updatedDetails.subject_code,
            updatedDetails.subject_name,
            updatedDetails.question, 
            updatedDetails.option1, 
            updatedDetails.option2, 
            updatedDetails.option3, 
            updatedDetails.option4, 
            updatedDetails.answer,
            updatedDetails.active,
        ];
        let updateQuery = `UPDATE questions SET subject_code=$2, subject_name=$3, question=$4, option1=$5, option2=$6, option3=$7, option4=$8, answer=$9, active=$10  WHERE question_id=$1`;
        try
        {
            let client = await pool.connect();
            let result = client.query(updateQuery, params);
            console.log("Updated successfully");
            client.release();
            return result;
        } 
        catch(err)
        {
            console.log(err);
        }
    }

}
module.exports = QuestionDao;