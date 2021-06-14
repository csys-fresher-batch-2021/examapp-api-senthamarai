const express = require('express')
const cors = require("cors");
require("dotenv").config();

const app = express()
app.use(express.json());
app.use(cors());

const SubjectController=require('./controller/SubjectController.js');
const AdminController=require('./controller/AdminController.js');
const UserController=require('./controller/UserController.js');
const QuestionController=require('./controller/QuestionController.js');

const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('PARIKSHA Reaching out to everyone'))

//Routes for admin 
app.post('/api/admin', AdminController.addNewAdmin); //Admin Registration

app.post('/api/admin/login', AdminController.authenticateAdmin); //Admin Login

app.put('/api/admin/changepassword', AdminController.changePassword); //Change User Password

app.delete('/api/admin/delete/:id', AdminController.deleteAdmin); //Delete Admin

app.get('/api/admin/users', UserController.getAllUsers); //Display all Users by Admin

app.get('/api/admin/users/:id', UserController.getUserById); //Display the Users by Id by Admin

app.delete('/api/admin/users/:id', UserController.deleteUser); //Delete the Users by Admin

app.get('/api/admin/user/organization/:organization_name', UserController.getUserByOrganization); // Display the Users by organization name

//Routes for registered users
app.post('/api/user', UserController.addNewUser); //User Registration

app.post('/api/user/login', UserController.authenticateUser); //User Login

app.put('/api/user/changepassword', UserController.changePassword); //Change User Password


//Routes for subjects
app.get('/api/subjects', SubjectController.getAllSubjects); // Display the Subjects by Users

app.get('/api/subjects/:id', SubjectController.getSubjectById); // Display the subjects by Id by Users

app.post('/api/admin/subjects', SubjectController.addNewSubject); //Add new Subject by Admin

app.delete('/api/admin/subjects/:id', SubjectController.deleteSubject); //Delete the Existing Subject by Admin

app.put('/api/admin/updatesubject', SubjectController.updateSubject); //Change User Password

//Routes for question

app.post('/api/admin/questions', QuestionController.addNewQuestion); //Add new Subject by Admin

app.get('/api/questions', QuestionController.getAllQuestions); //Display all Questions by Users

app.get('/api/questions/:id', QuestionController.getQuestionById); // Display the Questions by Id by Users

app.delete('/api/admin/questions/:id', QuestionController.deleteQuestion); //Delete the Questions by Admin

app.get('/api/question/code/:subject_code', QuestionController.getQuestionByCode); // Display the Questions by subject code

app.get('/api/question/name/:subject_name', QuestionController.getQuestionByName); // Display the Questions by subject name


app.listen(port, () => console.log(`Listening on port ${port}!`))