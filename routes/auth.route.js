const express = require('express');
const router = express.Router();

const {signUp, logIn, logOut, getMe} = require("../controllers/auth.controller");
const protectRoute = require("../middleware/protecteRoute");

router.get("/getUser", protectRoute, getMe);

router.post("/signUp", signUp);
router.post("/logIn", logIn);
router.post("/logOut", logOut);

module.exports = router;