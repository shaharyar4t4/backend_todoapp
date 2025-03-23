const express = require('express');
const { createNote } = require('../controllers/notesControllers');

const router = express.Router();


// when user add some data then it help to post the data in the DB
router.post("/",createNote);

module.exports = router;