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
router.get("/:userId", (req, res) => {
    res.send(`Here is your user: ${req.params.userId}`)
});

module.exports = router;