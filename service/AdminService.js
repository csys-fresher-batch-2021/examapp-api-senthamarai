const Joi = require('joi');
const AdminDao = require('../dao/AdminDao.js');
const AdminValidator = require('../validation/AdminValidator.js');
class AdminService 
{
    /**
     * Function adds the new admin data.
     * @param {*} admin 
     */
    static addNewAdmin(admin)
    {
       return AdminDao.addNewAdmin(admin);
            
    }

    /**
     * Function check whether user is available.
     * @param {*} login 
     */
    static authenticateAdmin(login)
    {
        return AdminDao.authenticateAdmin(login);
    }

    /**
     * Function to change password details
     * @param {*} updatedDetails
     */
    static changePassword(updatedDetails)
    {
        return AdminDao.changePassword(updatedDetails);   
    }

    /**
     * Function to delete a subject details by using id.
     * @param {*} id 
     */
    static deleteAdmin(id)
    {
        return AdminDao.deleteAdmin(id);
    }

     /**
     * Function to display all admin from the database
     */
    static getAllAdmins() 
    {
        return AdminDao.showAdminsList();  
    }

}
module.exports = AdminService;
