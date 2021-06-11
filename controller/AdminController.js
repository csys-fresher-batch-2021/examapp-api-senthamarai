const AdminService = require('./../service/AdminService.js');
class AdminController 
{
     /**
     * Function to add new admin users to the database.
     * @param {*} req 
     * @param {*} res 
     */
    static async addNewAdmin(req, res) 
    {
        try 
        {
            let status = await AdminService.addNewAdmin(req.body);
            if (status != null) 
            {
                console.log("Admin added successfully");
                res.status(200).json({ message: "success" });
            }
        }
        catch (error) 
        {
            console.log(error);
            res.status(400).send(error.message);
        }
    }
}
module.exports = AdminController;