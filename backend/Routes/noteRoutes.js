const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'List of notes will go here' });
});

router.post('/', (req, res) => {
    res.status(201).json({ message: 'Note created successfully' });
});

router.put('/:id', (req, res ) => {
    res.json({ message: `Note with id ${req.params.id} updated successfully` });
});

router.delete('/:id', (req, res) => {
    res.json({ message: `Note with id ${req.params.id} deleted successfully` });
});


module.exports = router; 
