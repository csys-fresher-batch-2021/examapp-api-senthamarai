const express = require('express')
const cors = require("cors");
require("dotenv").config();

const app = express()
app.use(express.json());
app.use(cors());

const SubjectController=require('./controller/SubjectController.js');

const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('PARIKSHA Reaching out to everyone'))

//Routes for subjects
app.get('/api/subjects', SubjectController.getAllSubjects); // Display the Subjects by Users

app.get('/api/subjects/:id', SubjectController.getSubjectById); // Display the subjects by Id by Users

app.post('/api/subjects', SubjectController.addNewSubject); //Add new Subject by Admin

app.delete('/api/subjects/:id', SubjectController.deleteSubject); //Delete the Existing Subject by Admin

app.listen(port, () => console.log(`Listening on port ${port}!`))