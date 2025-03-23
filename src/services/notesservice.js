
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

const getNoteAsync = async () => {
    return await Note.find();
}

const getNoteByIdAsync = async (id) => {
    const note = await Note.findById(id);
    return note;
}

const deleteNote = async(id)=>{
     await Note.findByIdAndDelete(id);
     return true;
}

const updateNote = async (id, updateNote)=>{
    await Note.findOneAndUpdate(id, updateNote);
    return true;
}
module.exports = {createNoteAsync, getNoteAsync, getNoteByIdAsync, deleteNote, updateNote};

