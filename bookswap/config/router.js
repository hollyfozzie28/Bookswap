import express from "express";
import booksController from "../controllers/booksController.js";

const Router = express.Router();

Router.route("/books")
  .get(booksController.getAllBooks)
  .post(booksController.addBook);

Router.route("/books/available")
  .get(booksController.getAvailableBooks)

Router.route("/books/:id")
  .get(booksController.getSingleBook)
  .put(booksController.updateBook)
  .delete(booksController.deleteBook);
  
export default Router;
