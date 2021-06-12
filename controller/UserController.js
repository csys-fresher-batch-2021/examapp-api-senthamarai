const UserService = require('./../service/UserService.js');
class UserController 
{
    //Function to display the users from the database
    static async getAllUsers(req, res) 
    {
        let result = await UserService.getAllUsers();
        res.send(result);
    }
}
module.exports = UserController;