const express = require('express');
const cors = require('cors');
const {getAllUsers, getAllOpnUsers,loginUser} = require('./controllers/test.controller.js')

const app = express();

// app.use(cors)
app.use(express.json())
app.post('/api/login',loginUser)
app.get("/api/users",getAllUsers)
app.get("/api/opnusers",getAllOpnUsers)

const PORT = process.env.PORT || 3001;
app.get('/',(req, res) => {
   return res.send(`welcome to api-test`)
})

app.listen(PORT,()=>{
    console.log('listening on port '+PORT);
})