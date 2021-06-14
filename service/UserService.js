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
     * Function to display all users from the database
     */
    static getAllUsers() 
    {
        return UserDao.showUsersList();  
    }

    /**
     * Function to get a user details by using id.
     * @param {*} id
     */
    static getUserDetail(id )
    {
        return UserDao.getUser(id);
    }

    /**
     * Function to delete a user details by using id.
     * @param {*} id 
     */
    static deleteUser(id)
    {
        return UserDao.deleteUser(id);
    }

    /**
     * Function to change password details
     * @param {*} updatedDetails
     */
    static changePassword(updatedDetails)
    {
        const result = UserValidator.passwordSchema().validate(updatedDetails);
        if(result.error != null)
        {
            throw new Error(result.error);
        }
        else
        {
            return UserDao.changePassword(updatedDetails);
        }      
    }

    /**
     * Function to get a user details by organization_name.
     * @param {*} organization_name
     */
    static getUserByOrganization(organization_name)
    {
        return UserDao.getUserByOrganization(organization_name);
    }

    /**
     * Function to update user details
     * @param {*} updatedDetails
     */
    static updateUser(updatedDetails)
    {
        const result = UserValidator.updateSchema().validate(updatedDetails);
        if(result.error != null)
        {
            throw new Error(result.error);
        }
        else
        {
            return UserDao.updateUser(updatedDetails);
        }      
    }


}
module.exports = UserService;
