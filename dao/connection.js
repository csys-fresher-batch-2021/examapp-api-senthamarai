const {Pool} = require('pg');
const pool = new Pool({
    user: 'prod_user',
    host: 'projecttracker.ck1ayq0lncmp.ap-south-1.rds.amazonaws.com',
    database: 'onlineexam_db',
    password: 'prod_user',
    port: 5432,
});

pool.on('error', (err, client) =>{
 console.error('Error', err);
});

module.exports = pool;