
// this file code is help to save the note in the DB
const Note = require("../models/notes");

const createNoteAsync = async ({title, content, userId}) => {
    const newNote = new Note({
        title : title,
        content : content,
        userId : userId
    });
    await newNote.save();
    return newNote;
};

module.exports = {createNoteAsync};

