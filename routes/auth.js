const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema");
const { body, validationResult } = require("express-validator");

// create a user using post : "/"
router.post('/', [
    body("firstname", "Name length should be greater than 3").isLength({ min: 3 }),
    body("email", "Not a valid email").isEmail(),
    body("phone", "Phone number length should be 10").isLength({ min: 10, max:10 })
], async (req, res) => {
    let success = false;

    // if something goes wrong and get error msg and alert user
    const error = validationResult(req);

    if (!error.isEmpty()) {
        const msg = error.array()[0].msg;
        return res.status(400).json({ success, message: msg })

    }
    try {
        // check for exisiting user
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.json({ success, message: "Email already exist." });
        }

        // create a new user
        user = User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message
        });

        success = true;
        res.json({ success, message: "Thanks for registeration" });

    } catch (error) {
        res.status(500).send("Internal server error");
    }
})

module.exports = router