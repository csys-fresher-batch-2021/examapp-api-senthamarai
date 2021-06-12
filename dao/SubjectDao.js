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
        let getSubject = 'SELECT * FROM Subjectslist WHERE subject_id = $1';
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

    /**
     * Function to add new subject to database.
     * @param {*} subject
     */
    static async addNewSubject(subject) 
    {
        let subjectData=[subject.subject_code, subject.subject_name];
        let querySubject = 'INSERT INTO public.subjectslist(subject_code, subject_name) VALUES ($1,$2)';
        try 
        {
            const client = await pool.connect();
            const result = await client.query(querySubject, subjectData);
            client.release();
            return result;
        } 
        catch (error) 
        {
            console.log(error);
        }
    }

    /**
     * Function to delete a subject details by using id.
     * @param {*} id 
     */
    static async deleteSubject(id)
    {
        let params = [id];
        let deleteQuery = 'DELETE FROM subjectslist WHERE subject_id = $1';
        try 
        {
            const client = await pool.connect();
            const result = await client.query(deleteQuery, params);
           // console.log(result);
            client.release();
            return result.rowCount;
        } 
        catch (error) 
        {
            console.log(error);
        }
    }
}
module.exports = SubjectDao;