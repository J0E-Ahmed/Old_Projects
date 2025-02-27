const express = require("express");
const { check } = require("express-validator");

const usersControllers = require("../controllers/users-controllers");

const router = express.Router();

router.get("/", usersControllers.getUsers);

router.post(
  "/signup",
  [
    check("name").trim().notEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").trim().isLength({ min: 8 }),
  ],
  usersControllers.signup
);

router.post("/login", usersControllers.login);

module.exports = router;
