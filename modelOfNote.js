import mongoose from 'mongoose';

mongoose.Promise= global.Promise;

const NoteSchema = new mongoose.Schema({
  title: String,
  code: String,
  language: String,
  tags: Array,
});

const Note = mongoose.model('Note', NoteSchema);

export default Note;
