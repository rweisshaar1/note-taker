const router = require('express').Router();
const fs = require("fs");
const {v4: uuidv4} = require('uuid');

// We should get all the notes and send them back
router.get("/", (req, res) => {
  // readFile to get the latest version of the all the notes
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    const jsonNotes = JSON.parse(data)
    err ? console.error(err) : res.status(200).json(jsonNotes)
  })
});

router.post('/', (req, res) => {
  // read the current data 
  // add the new note to that data 
  // write that data to the same file
  fs.promises.readFile("./db/db.json", "utf-8")
  .then(function(data){
    const jsonNotes = JSON.parse(data);
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4()
    }
    jsonNotes.push(newNote);
    return fs.promises.writeFile("./db/db.json", JSON.stringify(jsonNotes));
  })
  .then(function(data){
    res.json({message: "Job Done!"})
  })
})


module.exports = router;