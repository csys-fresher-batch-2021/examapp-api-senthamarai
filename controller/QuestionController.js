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
}
module.exports = QuestionController;