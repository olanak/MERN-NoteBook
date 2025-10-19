const GetAllNotes = (req, res) => {
  res.status(200).json({ message: 'List of notes will go here' });
};

const CreateNote = (req, res) => {
  res.status(201).json({ message: 'Note created successfully' });
};

const UpdateNote = (req, res) => {
  res.status(200).json({ message: `Note with id ${req.params.id} updated successfully` });
};

const DeleteNote = (req, res) => {
    res.status(200).json({ message: `Note with id ${req.params.id} deleted successfully` });
}

module.exports = { GetAllNotes, CreateNote, UpdateNote, DeleteNote };