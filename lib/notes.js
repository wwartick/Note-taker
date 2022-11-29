const fs = require('fs');
const path = require('path');

function createNote(text, notesArray) {
    const note = text;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ notes: notesArray} , null, 2)
    );
    return note;
}

function validateNote(note) {
    if ((!note.title || typeof note.title !== 'string') && (!note.text || typeof note.text !== 'string')) {
        return false;
    }
    return true;
}

module.exports = {
    createNote,
    validateNote,
};