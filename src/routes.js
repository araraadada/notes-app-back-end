const { addNoteHandler, getAllNotesHandler, getNoteByIdHander, updateHandler } = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHander,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: updateHandler,
    },
];
module.exports = routes;