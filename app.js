const yargs = require("yargs");
const notes = require("./notes.js");

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note Title",
            alias: "t",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Content of the note",
            alias: "b",
            demandOption: true,
            type: "string",
        }
    },
    handler(argv) {
        notes.write(argv.title, argv.body);
    }

}).command({
    command: "delete",
    describe: "Delete a note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string",
            alias: "t"
        }
    },
    handler(argv) {
        notes.deleteNote(argv.title);
    }

}).command({
    command: "list",
    describe: "List all notes",
    handler() {
        notes.listNotes();
    }

}).command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string",
            alias: "t"
        }
    },
    handler(argv) {
        notes.read(argv.title);
    }
});

yargs.parse();