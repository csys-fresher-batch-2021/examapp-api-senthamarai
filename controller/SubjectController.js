const SubjectService = require('./../service/SubjectService.js');
class SubjectController 
{
    //Function to display the subjects from the database
    static async getAllSubjects(req, res) 
    {
        let result = await SubjectService.getAllSubjects();
        res.send(result);
    }

    //Function to display the subjects by id from the database
    static async getSubjectById(req, res) 
    {
        let result = await SubjectService.getSubjectDetail(req.params.id);
        res.send(result.rows);
    }
    
    /**
     * Function to add new subject to the database.
     * @param {*} req 
     * @param {*} res 
     */
    static async addNewSubject(req, res) 
    {
        try 
        {
            let status = await SubjectService.addNewSubject(req.body);
            if (status != null) 
            {
                console.log("Subject added successfully");
                res.status(200).json({ message: "success" });
            }
        }
        catch (error) 
        {
            console.log(error);
            res.status(400).send(error.message);
        }
    }
}
module.exports = SubjectController;