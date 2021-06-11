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
        const result = AdminValidator.adminSchema().validate(admin);
        if(result.error != null)
        {
            throw new Error(result.error);
        }
        else
        {
            return AdminDao.addNewAdmin(admin);
        }
            
    }
}
module.exports = AdminService;