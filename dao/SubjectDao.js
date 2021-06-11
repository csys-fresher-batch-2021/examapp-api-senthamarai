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

    /**
     * Function to get a subject details by using id.
     * @param {*} id 
     */
    static async getSubject(id)
    {
        let params = [id];
        let getSubject = 'SELECT * FROM Subjectslist WHERE id = $1';
        try 
        {
            const client = await pool.connect();
            const result = await client.query(getSubject, params);
            client.release();
            return result;
        } 
        catch (err) 
        {
            console.log(err);
        }
    }
}
module.exports = SubjectDao;