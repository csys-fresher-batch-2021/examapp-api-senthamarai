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

    /**
     * Function to delete the subject to the database.
     * @param {*} req 
     * @param {*} res 
     */
    static async deleteSubject(req, res) 
    {
        try {
            let id = parseInt(req.params.id);
            const status = await SubjectService.deleteSubject(id);
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
    * Function to change the subject details in the database.
    * @param {*} req 
    * @param {*} res 
    */
    static async updateSubject(req, res)
    {
        try
        {
            let result = await SubjectService.updateSubject(req.body);
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
module.exports = SubjectController;