
// this file will help taken input from user and create a new note


const  {createNoteAsync} = require('../services/notesservice');

const createNote = async (req , res) =>{
    try{
       const {title, content, userId} = req.body;
       const newTodo = await createNoteAsync(title, content, userId);
         res.status(201).json(newTodo);
    }catch(error){
        console.log(`Error: ${error.message}`);
        res.status(500).json({message: "Server Error"});
    }
    
}

module.exports = {createNote};