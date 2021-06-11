const SubjectDao = require('../dao/SubjectDao.js');
class SubjectService 
{
    /**
     * Function to display all subjects from the database
     */
    static getAllSubjects() 
    {
        return SubjectDao.showSubjectsList();  
    }
}
module.exports = SubjectService;