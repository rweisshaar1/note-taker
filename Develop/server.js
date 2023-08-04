const express = require('express'); // gets express working
const path = require('path');
const PORT = process.env.PORT || 3001; // determines a port
const app = express(); // creates a variable to express to use
const api = require('./routes/index') ; // connects the server side routes in routing folder
const data = require('./db/db.json');
const fs = require("fs");


app.use("/api", api);

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.post('/api/notes' , (req, res) => {
  console.info(`${req} request received to add a review`);
  
})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
