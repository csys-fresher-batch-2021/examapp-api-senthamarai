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
}
module.exports = UserDao;