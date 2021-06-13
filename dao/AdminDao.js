const pool = require('../dao/connection.js');
class AdminDao 
{
    /**
     * Function to add new admin user to database.
     * @param {*} admin
     */
    static async addNewAdmin(admin) 
    {
        let adminData = [admin.admin_id, admin.firstname, admin.lastname, admin.email, admin.organization_name, admin.password];
        let querySubject = 'INSERT INTO public.adminuser(admin_id,firstname, lastname, email, organization_name, password) VALUES ($1, $2, $3 ,$4 , $5, $6)';
        try 
        {
            const client = await pool.connect();
            const result = await client.query(querySubject, adminData);
            client.release();
            return result;
        } 
        catch (error) 
        {
            console.log(error);
        }
    }

    /**
     * Function to check whether user is available in database for authentication.
     * @param {*} login 
     */
    static async authenticateAdmin(login)
    {
        let loginData = [login.email, login.password];
        const userQuery = "SELECT * FROM adminuser WHERE email=$1 AND password=$2";
        try
        {
            let client = await pool.connect();
            let result = await client.query(userQuery, loginData);
            client.release();
            return result.rows;
        } 
        catch(err)
        {
            console.log(err);
        }
    }

    /**
     * Function to a change password in database.
     * @param {*} updatedDetails
     */
    static async changePassword(updatedDetails)
    {
        let params = [updatedDetails.email,updatedDetails.password];
        let jobQuery = `UPDATE adminuser SET password=$2 WHERE email=$1`;
        try
        {
            let client = await pool.connect();
            let result = client.query(jobQuery, params);
            console.log("Password changed successfully");
            client.release();
            return result;
        } 
        catch(err)
        {
            console.log(err);
        }
    }

    /**
     * Function to delete a admin details by using id.
     * @param {*} id 
     */
    static async deleteAdmin(id)
    {
        let params = [id];
        let deleteQuery = 'DELETE FROM adminuser WHERE admin_id = $1';
        try 
        {
            const client = await pool.connect();
            const result = await client.query(deleteQuery, params);
           // console.log(result);
            client.release();
            return result.rowCount;
        } catch (error) 
        {
            console.log(error);
        }
    }
}
module.exports = AdminDao;