const router = require('express').Router();
const data = require('../db/db.json')

router.get("/", (req, res) => {
  res.status(200).json(data)
});


module.exports = router;