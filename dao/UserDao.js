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
}
module.exports = UserDao;