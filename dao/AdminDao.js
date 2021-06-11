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
}
module.exports = AdminDao;