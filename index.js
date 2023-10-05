const express = require('express');
const multer = require('multer');
const csv = require('csv-parser');
const cors = require("cors")
const path = require("path")
require("./API/Hellper/db_connection")
const admin = require('firebase-admin');


const fs = require('fs');
require("dotenv").config()
const port = process.env.PORT || 3000
const db = admin.database();
const app = express();
app.use(express.json())
app.use(cors())


const clientSidpath = path.join(__dirname, "./client/dist")
app.use(("/", express.static(clientSidpath)))


// Configure multer to handle file uploads
const upload = multer({ dest: 'uploads/' });


app.post('/api/upload', (req, res) => {
  try {
    const { csvData } = req.body; 

    const dataRef = db.ref("students"); 
    dataRef.push(csvData, (error) => {
      if (error) {
        console.error('Error uploading data to Firebase:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Data uploaded to Firebase');
        res.status(200).json({ message: 'Data uploaded to Firebase' });
      }
    });
  } catch (error) {
    console.error('Error parsing request body:', error);
    res.status(400).json({ error: 'Bad Request' });
  }
});


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/dist/index.html"))
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
