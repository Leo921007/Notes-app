const {
    Router
} = require('express');
const router = Router();

//Alt + Z para mostrar todo el texto
const {
    renderNoteForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote
} = require('../controllers/notes.controller');
const { isAuthenticated } = require('../helpers/auth');

//New Note
router.get('/notes/add', isAuthenticated, renderNoteForm);

//El método post envía el formulario q hemos creado/Hace referencia a CREAR algo nuevo
router.post('/notes/new-note', createNewNote);

//Get All Notes

router.get('/notes', isAuthenticated, renderNotes);

//Edit Notes

//El método get hace la solicitud
router.get('/notes/edit/:id', isAuthenticated, renderEditForm);
//El metodo put está enfocado a actualizar
router.put('/notes/edit/:id', isAuthenticated, updateNote);

//Delete Notes
router.delete('/notes/delete/:id', isAuthenticated, deleteNote);


module.exports = router;