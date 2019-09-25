const fs = require("fs");
const file = "note.json";


const write = (title, body) => {
    const notes = readNotes(file);
    let index = notes.findIndex(i => i.title === title);
    if (index === -1) {
        notes.push({title: title, body: body});
    } else {
        notes[index].body += body;
    }
    writeNotes(file, notes);
};

const writeNotes = (fileName, data) => {
    fs.writeFileSync(fileName, JSON.stringify(data));
    console.log("New note added successfully!");
};

const deleteNote = title => {
    const notes = readNotes(file);
    const notesToKeep = notes.filter(note => note.title !== title);
    writeNotes(file, notesToKeep);
    console.log("Note deleted");
};

const listNotes = () => {
    console.log("Your Notes");
    const notes = readNotes(file);
    notes.forEach(note => {
        console.log(note.title);
    });
};

const read = title => {
    const notes = readNotes(file);
    const note = notes.find(note => note.title === title);
    if (note) {
        console.log(note.title);
        console.log(`Note body: [${note.body}]`);
    } else {
        console.log("Note Not Found !!");
    }
};

const readNotes = fileName => {
    if (fs.existsSync(file)) {
        return JSON.parse(fs.readFileSync(fileName));
    } else {
        return [];
    }
};

module.exports = {
    write,
    deleteNote,
    listNotes,
    read
};