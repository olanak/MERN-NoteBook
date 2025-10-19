const express = require('express');
const router = express.Router();
const {GetAllNotes, CreateNote, UpdateNote, DeleteNote} = require('../contrrollers/notesController')


router.get('/', GetAllNotes );

router.post('/', CreateNote );

router.put('/:id', UpdateNote );

router.delete('/:id', DeleteNote );


module.exports = router; 
