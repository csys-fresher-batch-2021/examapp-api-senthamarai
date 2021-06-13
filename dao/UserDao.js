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
}
module.exports = UserDao;