const express = require('express')
const cors = require("cors");
require("dotenv").config();

const app = express()
app.use(express.json());
app.use(cors());

const SubjectController=require('./controller/SubjectController.js');
const AdminController=require('./controller/AdminController.js');
const UserController=require('./controller/UserController.js');

const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('PARIKSHA Reaching out to everyone'))

//Routes for admin 
app.post('/api/admin', AdminController.addNewAdmin); //Admin Registration

app.post('/api/admin/login', AdminController.authenticateAdmin); //Admin Login

app.put('/api/admin/changepassword', AdminController.changePassword); //Change User Password

app.get('/api/admin/users', UserController.getAllUsers); //Display all Users by Admin

app.get('/api/admin/users/:id', UserController.getUserById); //Display the Users by Id by Admin


//Routes for registered users
app.post('/api/user', UserController.addNewUser); //User Registration

app.post('/api/user/login', UserController.authenticateUser); //User Login


//Routes for subjects
app.get('/api/subjects', SubjectController.getAllSubjects); // Display the Subjects by Users

app.get('/api/subjects/:id', SubjectController.getSubjectById); // Display the subjects by Id by Users

app.post('/api/admin/subjects', SubjectController.addNewSubject); //Add new Subject by Admin

app.delete('/api/admin/subjects/:id', SubjectController.deleteSubject); //Delete the Existing Subject by Admin

app.listen(port, () => console.log(`Listening on port ${port}!`))