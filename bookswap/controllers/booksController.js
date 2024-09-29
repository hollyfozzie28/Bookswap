import Book from '../models/books.js'

async function getAllBooks(_req, res, next) {
  try {
    const books = await Book.find()
    return res.status(200).json(books)
  } catch (err) {
    next(err)
  }
}

async function addBook(req, res, next) {
  try {
    const newBook = await Book.create(req.body)
    return res.status(201).send(newBook)
  } catch (err) {
    next(err)
  }
}

async function getAvailableBooks(req, res, next) {
  try {
    const availableBooks = await Book.find({ currentlyBorrowed: false });
    return res.status(200).json(availableBooks)
  } catch (err) {
    next(err)
  }
}

async function getSingleBook(req, res, next) {
  try {
    const book = await Book.findById(req.params.id)
    res.status(200).send(book)
  } catch (err) {
    next(err)
  }
}

async function deleteBook(req, res, next) {
  try {
    const book = await Book.findByIdAndDelete(req.params.id)

    if (!book) {
      return res.status(404).send({ message: 'Book does not exist' })
    }

    return res.status(200).json(book)
  } catch (err) {
    next(err)
  }
}

async function updateBook(req, res, next) {
  try {
    const book = await Book.findById(req.params.id)

    if (!book) {
      return res.send({ message: 'No book found' })
    }

    book.set(req.body)
    book.save()

    res.status(200).json(book)
  } catch (err) {
    next()
  }
}

export default {
  getAllBooks,
  addBook,
  getAvailableBooks,
  getSingleBook,
  deleteBook,
  updateBook,
}