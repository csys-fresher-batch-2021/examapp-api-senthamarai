const UserService = require('./../service/UserService.js');
class UserController 
{
    /**
     * Function to add new users to the database.
     * @param {*} req 
     * @param {*} res 
     */
    static async addNewUser(req, res) 
    {
        try 
        {
            let status = await UserService.addNewUser(req.body);
            if (status != null) 
            {
                console.log("Registered successfully");
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
module.exports = UserController;