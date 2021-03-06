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

    /**
     * Function to display question by subject code to the database.
     * @param {*} req 
     * @param {*} res 
     */
    static async getQuestionByCode(req, res)
    {
        try 
        {
            let subject_code = req.params.subject_code;
            let status = await QuestionService.getQuestionByCode(subject_code);
            if(status!=0)
            {
                res.send(status);
            } 
        }
        catch (error) 
        {
            res.status(400).send(error.message);
        }
    }

    /**
     * Function to display question by subject name to the database.
     * @param {*} req 
     * @param {*} res 
     */
    static async getQuestionByName(req, res)
    {
        try 
        {
            let subject_name = req.params.subject_name;
            let status = await QuestionService.getQuestionByName(subject_name);
            if(status!=0)
            {
                res.send(status);
            } 
        }
        catch (error) 
        {
            res.status(400).send(error.message);
        }
    }

    /**
    * Function to change the question details in the database.
    * @param {*} req 
    * @param {*} res 
    */
    static async updateQuestion(req, res)
    {
        try
        {
            let result = await QuestionService.updateQuestion(req.body);
            if(result != null)
            {
                 res.status(200).json({message: "success"});
            }
        } 
        catch(err)
        {
            res.status(400).json({message: err.message});
        }
    }
}
module.exports = QuestionController;