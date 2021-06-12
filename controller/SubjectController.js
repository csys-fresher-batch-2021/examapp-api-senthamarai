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
}
module.exports = SubjectController;