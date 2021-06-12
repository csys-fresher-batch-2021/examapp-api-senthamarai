const Joi = require('joi');
const UserDao = require('../dao/UserDao.js');
class UserService 
{
    /**
     * Function to display all subjects from the database
     */
    static getAllUsers() 
    {
        return UserDao.showUsersList();  
    }
}
module.exports = UserService;
