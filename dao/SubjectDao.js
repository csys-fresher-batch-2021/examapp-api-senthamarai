const pool = require('../dao/connection.js');
class SubjectDao 
{
    /**
     * Function to display all subjects from the database
     */
    static async showSubjectsList() 
    {
        let subjectQuery = 'SELECT * FROM subjectslist';
        try 
        {
            const client = await pool.connect();
            const result = await client.query(subjectQuery);
            client.release();
            console.log(result);
            return result.rows;
        }
        catch (error) 
        {
            console.log(error);
        }
    }
}
module.exports = SubjectDao;