import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { required: true, type: String },
  author: { required: true, type: String },
  genre: { required: true, type: String },
  releaseYear: { required: true, type: Number },
  currentlyBorrowed: { required: true, type: Boolean },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;