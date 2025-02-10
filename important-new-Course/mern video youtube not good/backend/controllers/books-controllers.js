const Book = require("../models/BookModel");

const { validationResult } = require("express-validator");

const MyError = require("../models/http-error");

const getBooks = async (req, res) => {
  let books;
  try {
    books = await Book.find({});
  } catch (err) {
    return MyError(
      res,
      500,
      "Something went wrong, could not find any books.",
      err
    );
  }
  res.json({
    count: books.length,
    books: books.map((book) => book.toObject({ getters: true })),
  });
};

const getBookById = async (req, res) => {
  const bookId = req.params.pid;
  let book;
  try {
    book = await Book.findById(bookId);
  } catch (err) {
    return MyError(
      res,
      500,
      "Something went wrong, could not retrieve the book.",
      err
    );
  }
  if (!book) {
    return MyError(res, 404, "Could not find a book for the provided id.");
  }

  res.status(202).json({ book: book.toObject({ getters: true }) });
};

const updateBook = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return MyError(res, 422, "invalid inputs passed, please check your data");
  }

  const bookId = req.params.pid;

  let book;
  try {
    book = await Book.findByIdAndUpdate(bookId, req.body, { new: true });
    await book.save();
  } catch (err) {
    return MyError(res, 500, "Something went wrong,could not update book", err);
  }
  if (!book) {
    return MyError(res, 404, "Book is not found");
  }
  res.status(200).json({ book: book.toObject({ getters: true }) });
};

const createBook = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return MyError(res, 422, "invalid inputs passed, please check your data");
  }

  const { title, author, publishYear } = req.body;

  const newBook = new Book({
    title,
    author,
    publishYear,
  });

  try {
    await newBook.save();
  } catch (err) {
    return MyError(
      res,
      500,
      "Something went wrong, could not create a book.",
      err
    );
  }
  res.status(201).json({ book: newBook.toObject({ getters: true }) });
};

const deleteBookById = async (req, res) => {
  const bookId = req.params.pid;

  let book;
  try {
    book = await Book.findById(bookId);
  } catch (error) {
    return MyError(
      res,
      500,
      "Something went wrong, could not retrieve book",
      error.message
    );
  }

  if (!book) {
    return MyError(res, 404, "Could not find book for the provided id.");
  }

  try {
    await Book.deleteOne({ _id: bookId });
  } catch (error) {
    return MyError(
      res,
      500,
      "Something went wrong, could not delete book",
      error.message
    );
  }

  res.status(200).json({ message: "Deleted book successfully." });
};

exports.createBook = createBook;
exports.deleteBookById = deleteBookById;
exports.updateBook = updateBook;
exports.getBookById = getBookById;
exports.getBooks = getBooks;
