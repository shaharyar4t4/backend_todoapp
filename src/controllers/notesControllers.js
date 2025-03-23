
const  createNoteAsync = require('../services/notesservice');

const createNote = async (req , res) =>{
    try{
       const {title, content, userId} = req.body;
       const newTodo = createNoteAsync({title, content, userId});
         res.status(201).json(newTodo);
    }catch(error){
        console.log(`Error: ${ErrorEvent.message}`);
        res.status(500).json({message: "Server Error"});
    }
    
}

module.exports = {createNote};