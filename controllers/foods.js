const express = require("express");
const router = express.Router();

const User = require("../models/user.js")

// Router Logic

// GET /users/:userId/foods
router.get("/", (req, res) => {
  res.render("foods/index.ejs");
});

// GET /users/:userId/foods/new
router.get("/new", async (req, res) => {
  res.render("foods/new.ejs");
});

module.exports = router;