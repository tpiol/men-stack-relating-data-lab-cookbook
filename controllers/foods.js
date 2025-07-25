const express = require("express");
const router = express.Router();

const User = require("../models/user.js")

// Router Logic

// GET /users/:userId/foods
router.get("/", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    res.render("foods/index.ejs", {
      pantry: currentUser.pantry,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/")
  }
});

// GET /users/:userId/foods/new
router.get("/new", async (req, res) => {
  res.render("foods/new.ejs");
});


// POST /foods
router.post("/", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.pantry.push(req.body);
    await currentUser.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/")
  }
});

// GET /controllers/foods.js
router.get("/:foodsId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const food = currentUser.pantry.id(req.params.foodsId);
    res.render("foods/show.ejs", {
      pantry: food,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
})

// DELETE /users/:userId/foods/:foodId
router.delete("/:foodsId", async (req, res) => {
  const currentUser = await User.findById(req.session.user._id);
  currentUser.pantry.id(req.params.foodsId).deleteOne();
  await currentUser.save();
  res.redirect("/")
});


//GET /users/:userId/foods/edit
router.get("/:foodsId/edit", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const food = currentUser.pantry.id(req.params.foodsId);
    res.render("foods/edit.ejs", {
      pantry: food,
    });


  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
})

module.exports = router;