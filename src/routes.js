const { addNoteHandler, getAllNotesHandler,getNoteByIdHandler,editNoteByIdHandler, deleteNoteByIdHandler} = require('./handler')

const routes = [
    {   // Menambahkan data
        method : 'POST',
        path : '/notes',
        handler : addNoteHandler
    },
    {   // Menampilkan semua data
        method : 'GET',
        path : '/notes',
        handler : getAllNotesHandler
    },
    {
        // Menampilkan 1 data
        method : 'GET',
        path : '/notes/{id}',
        handler : getNoteByIdHandler
    },
    {   // Merubah data
        method : 'PUT',
        path : '/notes/{id}',
        handler : editNoteByIdHandler
    },
    {
        // Menghapus data
        method : 'DELETE',
        path : '/note/{id}',
        handler : deleteNoteByIdHandler,
        options : {
            cors : {
                origin : ['*']
            }
        }
    }
]

module.exports = routes;