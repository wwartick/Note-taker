const router = require('express').Router();
const { createNewNote, validateNote, deleteNote } = require('../../lib/notes.js');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    // return all notes
    res.json(notes);
});

router.post('/notes', (req, res) => {
    //assign id by location in array
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('Note needs a title and text');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;
