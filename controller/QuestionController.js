const QuestionService = require('./../service/QuestionService.js');
class QuestionController 
{
    /**
     * Function to add new question to the database.
     * @param {*} req 
     * @param {*} res 
     */
    static async addNewQuestion(req, res) 
    {
        try 
        {
            let status = await QuestionService.addNewQuestion(req.body);
            if (status != null) 
            {
                console.log("Question added successfully");
                res.status(200).json({ message: "success" });
            }
        }
        catch (error) 
        {
            console.log(error);
            res.status(400).send(error.message);
        }
    }
    
    //Function to display the questions from the database
    static async getAllQuestions(req, res) 
    {
        let result = await QuestionService.getAllQuestions();
        res.send(result);
    }

    //Function to display the questions by id from the database
    static async getQuestionById(req, res) 
    {
        let result = await QuestionService.getQuestionDetail(req.params.id);
        res.send(result);
    }

    /**
     * Function to delete the questions to the database.
     * @param {*} req 
     * @param {*} res 
     */
    static async deleteQuestion(req, res) 
    {
        try 
        {
            let id = parseInt(req.params.id);
            const status = await QuestionService.deleteQuestion(id);
            if (status != 0) 
            {
                console.log("Deleted successfully");
                res.status(200).json({ message: "success" });
            }
        }
        catch (error) 
        {
            res.status(400).send(error.message);
        }
    }
}
module.exports = QuestionController;