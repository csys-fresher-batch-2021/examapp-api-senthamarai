const pool = require('../dao/connection.js');
class UserDao 
{
    /**
     * Function to add new user to database.
     * @param {*} user
     */
    static async addNewUser(user) 
    {
        let userData = [user.name, user.number, user.password];
        let querySubject = 'INSERT INTO public.registeruser(name, number, password) VALUES ($1, $2, $3)';
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
        let loginData = [login.number, login.password];
        const userQuery = "SELECT * FROM registeruser WHERE NUMBER=$1 AND PASSWORD=$2";
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
     * Function to display all users from the database
     */
    static async showUsersList() 
    {
        let userQuery = 'SELECT * FROM registeruser';
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