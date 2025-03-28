
// this file will help taken input from user and create a new note


const  {createNoteAsync, getNoteAsync, getNoteByIdAsync, deleteNote} = require('../services/notesservice');

const createNote = async (req , res) =>{
    try{
       const {title, content, userId} = req.body;
       const newTodo = await createNoteAsync({title, content, userId});
         res.status(201).json(newTodo);
    }catch(error){
        console.log(`Error: ${error.message}`);
        res.status(500).json({message: "Server Error"});
    }
    
}

const getAllNotes = async(req, res) =>{
    try{
        const notes = await getNoteAsync();
        res.status(200).json(notes);
    }catch(error){
        console.log(`Error: ${error.message}`);
        res.status(500).json({message: "Server Error"});
    }
}

const getNotesById = async(req, res) =>{
    try{
        const {id} = req.params;
        const note = await getNoteByIdAsync(id);
        if(note){
            res.status(200).json(note);
        }else{
            res.status(400).json({message: "Note is not Found"});
        }
    }catch(error){
        console.log(`Error: ${error.message}`);
        res.status(500).json({message: "Server Error"});
    }
}

// const updateNotes = async (req, res) =>{
//     try{
//         const {id} = req.params;
//         const {title, content} = req.body;
//         const updateNotes = await updateNote(id,{title, content});
//         if(updateNotes){
//             res.status(200).json(updateNotes);
//         }
//         else{
//           res.status(400).json({message: "Not found the notes"});
//         }
//     }catch(error){
//       console.log(`Error: ${(error.message)}`);
//       res.status(500).json({message: "Server Error"});
//     }
// }

const deleteNotes = async (req, res) =>{
    try {
       const {id} = req.params;
       const deleted = await deleteNote(id);
       if(deleted){
         res.status(200).json({message: "Note is deleted"});
       }else{
        res.status(400).json({message: "Note is not found"});
       }
    }catch(error){
        console.log(`Error: ${error.message}`);
        res.status(500).json({message: "Server Error"});
   }
}

module.exports = {createNote, getAllNotes, getNotesById, deleteNotes};