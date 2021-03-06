const pool = require('../dao/connection.js');
class AdminDao 
{
    /**
     * Function to add new admin user to database.
     * @param {*} admin
     */
    static async addNewAdmin(admin) 
    {
        let adminData = [admin.firstname, admin.lastname, admin.email, admin.organization_name, admin.password];
        let querySubject = 'INSERT INTO public.adminuser(firstname, lastname, email, organization_name, password) VALUES ($1, $2, $3 ,$4 , $5)';
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
        let changeQuery = `UPDATE adminuser SET password=$2 WHERE email=$1`;
        try
        {
            let client = await pool.connect();
            let result = client.query(changeQuery, params);
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

     /**
     * Function to display all users from the database
     */
    static async showAdminsList() 
    {
        let userQuery = 'SELECT admin_id, firstname,lastname,email,organization_name,created_on FROM adminuser';
        try
        {
            const client = await pool.connect();
            const result = await client.query(userQuery);
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
module.exports = AdminDao;