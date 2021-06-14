const pool = require('../dao/connection.js');
class UserDao 
{
    /**
     * Function to add new user to database.
     * @param {*} user
     */
    static async addNewUser(user) 
    {
        let userData = [user.user_id, user.firstname, user.lastname,user.email,user.organization_name,user.password];
        let querySubject = 'INSERT INTO public.registeruser(user_id, firstname, lastname, email, organization_name, password) VALUES ($1, $2, $3, $4, $5 ,$6)';
        try 
        {
            const client = await pool.connect();
            const result = await client.query(querySubject, userData);
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
    static async authenticateUser(login)
    {
        let loginData = [login.email, login.password];
        const userQuery = "UPDATE registeruser SET last_login = now() WHERE email=$1 AND password=$2";
        try
        {
            let client = await pool.connect();
            let result = await client.query(userQuery,loginData);
            client.release();
            return result;
        } 
        catch(err)
        {
            console.log(err);
        }
    }

    /**
     * Function to display all users from the database
     */
    static async showUsersList() 
    {
        let userQuery = 'SELECT user_id,firstname,lastname,email,organization_name,created_on,last_login FROM registeruser';
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

    /**
     * Function to get a user details by using id.
     * @param {*} user_id 
     */
    static async getUser(user_id)
    {
        let params = [user_id];
        let getUser = 'SELECT user_id,firstname,lastname,email,organization_name,created_on,last_login FROM registeruser WHERE user_id=$1';
        try 
        {
            const client = await pool.connect();
            const result = await client.query(getUser, params);
            client.release();
            return result;
        } 
        catch (err) 
        {
            console.log(err);
        }
    }

    /**
     * Function to delete a user details by using id.
     * @param {*} id 
     */
    static async deleteUser(id)
    {
        let params = [id];
        let deleteQuery = 'DELETE FROM registeruser WHERE user_id = $1';
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
     * Function to a change password in database.
     * @param {*} updatedDetails
     */
    static async changePassword(updatedDetails)
    {
        let params = [updatedDetails.email,updatedDetails.password];
        let changeQuery = `UPDATE registeruser SET password=$2 WHERE email=$1`;
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
     * Function to get a user details by organization name.
     * @param {*} organization_name
     */
    static async getUserByOrganization(organization_name)
    {
        let params = [organization_name];
        let getOrganization = 'SELECT  user_id,firstname,lastname,email,organization_name,created_on,last_login FROM registeruser WHERE organization_name=$1';
        try 
        {
            const client = await pool.connect();
            const result = await client.query(getOrganization, params);
            client.release();
            return result.rows;
        } 
        catch (err) 
        {
            console.log(err);
        }
    }

    /**
     * Function to update user details in database.
     * @param {*} updatedDetails
     */
    static async updateUser(updatedDetails)
    {
        let params = [
            updatedDetails.user_id,
            updatedDetails.firstname,
            updatedDetails.lastname,
            updatedDetails.email, 
            updatedDetails.organization_name
        ];
        let updateQuery = `UPDATE registeruser SET firstname=$2, lastname=$3, email=$4, organization_name=$5 WHERE user_id=$1`;
        try
        {
            let client = await pool.connect();
            let result = client.query(updateQuery, params);
            console.log("Updated successfully");
            client.release();
            return result;
        } 
        catch(err)
        {
            console.log(err);
        }
    }

}
module.exports = UserDao;