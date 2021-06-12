const pool = require('../dao/connection.js');
class UserDao 
{
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