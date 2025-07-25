const express = require("express");
const router = express.Router();
const User = require("../models/user.js")


// GET /users/
router.get("/", async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.render("users/index.ejs", {
            allUsers,
        });
    } catch (error) {
        console.log(error);
        res.redirect("/")
    }
});

// users/show
router.get("/:userId", async (req, res) => {
    try {
        const otherUser = await User.findById(req.params.userId);
        res.render("users/show.ejs", {
            otherUser: otherUser.pantry,
            otherUsername: otherUser.username,
        });
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
});

module.exports = router;