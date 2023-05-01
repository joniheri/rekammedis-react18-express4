const express = require("express");
const router = express.Router();

const {
  getTodos,
  getTodoById,
} = require("../Controllers/Versi1/TodoController");

const {
  getUsers,
  getUserById,
} = require("../Controllers/Versi1/UserController");

const {
  authTest,
  registerAuth,
} = require("../Controllers/Versi1/AuthController");

// router Todo
router.get("/todos", getTodos);
router.get("/todo/:id", getTodoById);

// router TbUser
router.get("/users", getUsers);
router.get("/user/:id", getUserById);

// router Auth
router.get("/authtest", authTest);
router.post("/register", registerAuth);

module.exports = router;
