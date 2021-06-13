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

    /**
     * Function to authenticate registered user.
     * @param {*} req 
     * @param {*} res 
     */
    static async authenticateUser(req, res)
    {
        let result = await UserService.authenticateUser(req.body);
        if(result != 0)
        {
            console.log("Login successfully");
            res.status(200).json({ message: "success" });
        } 
        else
        {
            res.status(400).json({message: "failed"});
        }
    }
}
module.exports = UserController;