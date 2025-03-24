const express = require('express');
const { createNote, getNotesById, getAllNotes, deleteNotes } = require('../controllers/notesControllers');

const router = express.Router();


// when user add some data then it help to post the data in the DB
router.post("/",createNote);
router.get("/", getAllNotes);
router.get("/:id", getNotesById);
router.delete("/:id", deleteNotes);
// router.put("/:id", updateNotes);

module.exports = router;