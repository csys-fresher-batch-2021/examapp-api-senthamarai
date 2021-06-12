const SubjectDao = require('../dao/SubjectDao.js');
let SubjectValidator = require('../validation/SubjectValidator.js');
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

    /**
     * Function to add new subject to database.
     * @param {*} subject
     */
    static addNewSubject(subject)
    {
        const result = SubjectValidator.subjectSchema().validate(subject);
        if(result.error != null)
        {
            throw new Error(result.error);
        }
        else
        {
            return SubjectDao.addNewSubject(subject);
        }
    }

    /**
     * Function to delete subject by id from the database
     */
    static deleteSubject(id)
    {
        return SubjectDao.deleteSubject(id);
    }
}
module.exports = SubjectService;