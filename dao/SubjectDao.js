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
        let getSubject = 'SELECT * FROM subjectslist WHERE id = $1';
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

    /**
     * Function to a change subject details in database.
     * @param {*} updatedDetails
     */
    static async updateSubject(updatedDetails)
    {
        let params = [updatedDetails.subject_code,updatedDetails.subject_name, updatedDetails.subject_id];
        let subjectQuery = `UPDATE subjectslist SET subject_code=$1, subject_name=$2 WHERE subject_id=$3`;
        try
        {
            let client = await pool.connect();
            let result = client.query(subjectQuery, params);
            console.log("Subject changed successfully");
            client.release();
            return result;
        } 
        catch(err)
        {
            console.log(err);
        }
    }
}
module.exports = SubjectDao;