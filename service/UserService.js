const Joi = require('joi');
const UserDao = require('../dao/UserDao.js');
const UserValidator = require('../validation/UserValidator.js');
class UserService 
{
    /**
     * Function adds the new registered user data.
     * @param {*} user
     */
    static addNewUser(user)
    {
        const result = UserValidator.userSchema().validate(user);
        if(result.error != null)
        {
            throw new Error(result.error);
        }
        else
        {
            return UserDao.addNewUser(user);
        }
            
    }

    /**
     * Function check whether user is available.
     * @param {*} login 
     */
    static authenticateUser(login)
    {
        return UserDao.authenticateUser(login);
    }

    /**
     * Function to display all subjects from the database
     */
    static getAllUsers() 
    {
        return UserDao.showUsersList();  
    }

    /**
     * Function to get a subject details by using id.
     * @param {*} id 
     */
    static getUserDetail(id)
    {
        return UserDao.getUser(id);
    }

    /**
     * Function to delete a subject details by using id.
     * @param {*} id 
     */
    static deleteUser(id)
    {
        return UserDao.deleteUser(id);
    }

}
module.exports = UserService;
