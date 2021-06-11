const pool = require('../dao/connection.js');
class AdminDao 
{
    /**
     * Function to add new admin user to database.
     * @param {*} admin
     */
    static async addNewAdmin(admin) 
    {
        let adminData = [admin.name, admin.email, admin.password];
        let querySubject = 'INSERT INTO public.adminuser(name, email, password) VALUES ($1, $2, $3)';
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
        const userQuery = "SELECT * FROM adminuser WHERE EMAIL=$1 AND PASSWORD=$2";
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
}
module.exports = AdminDao;