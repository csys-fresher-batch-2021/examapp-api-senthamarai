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

    /**
     * Function to get a subject details by using id.
     * @param {*} id 
     */
    static getSubjectDetail(id)
    {
        return SubjectDao.getSubject(id);
    }
}
module.exports = SubjectService;