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
}
module.exports = UserService;
