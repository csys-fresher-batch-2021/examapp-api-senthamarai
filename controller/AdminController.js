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
     * Function to authenticate admin user.
     * @param {*} req 
     * @param {*} res 
     */
    static async authenticateAdmin(req, res)
    {
        let result = await AdminService.authenticateAdmin(req.body);
        if(result.length > 0)
        {
            result[0]['message'] = "success";
            console.log("Login successfully");
            res.status(200).json(result[0]);
        } 
        else
        {
            res.status(400).json({message: "failed"});
        }
    }
}
module.exports = AdminController;