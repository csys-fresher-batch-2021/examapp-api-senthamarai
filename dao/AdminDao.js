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
}
module.exports = AdminDao;