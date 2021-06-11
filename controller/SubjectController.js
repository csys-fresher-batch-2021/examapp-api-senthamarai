const SubjectService = require('./../service/SubjectService.js');
class SubjectController 
{
    //Function to display the subjects from the database
    static async getAllSubjects(req, res) 
    {
        let result = await SubjectService.getAllSubjects();
        res.send(result);
    }
}
module.exports = SubjectController;