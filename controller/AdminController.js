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
  
    /**
    * Function to change the admin password in the database.
    * @param {*} req 
    * @param {*} res 
    */
    static async changePassword(req, res)
    {
        try
        {
            let result = await AdminService.changePassword(req.body);
            if(result != null)
            {
                 res.status(200).json({message: "success"});
            }
        } 
        catch(err)
        {
            res.status(400).json({message: err.message});
        }
    }
}
module.exports = AdminController;