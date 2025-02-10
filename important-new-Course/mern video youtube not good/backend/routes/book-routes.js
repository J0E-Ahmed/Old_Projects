const express = require("express");
const { check } = require("express-validator");
const bookControllers = require("../controllers/books-controllers");

const router = express.Router();

router.get("/", bookControllers.getBooks);
router.get("/:pid", bookControllers.getBookById);
router.patch(
  "/:pid",
  [
    check("title").trim().notEmpty(),
    check("author").trim().notEmpty(),
    check("publishYear").trim().notEmpty(),
  ],
  bookControllers.updateBook
);

router.delete("/:pid", bookControllers.deleteBookById);

router.post(
  "/",
  [
    check("title").trim().notEmpty(),
    check("author").trim().notEmpty(),
    check("publishYear").trim().notEmpty(),
  ],
  bookControllers.createBook
);

module.exports = router;
