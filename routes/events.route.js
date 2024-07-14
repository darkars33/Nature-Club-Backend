const express = require("express");
const router = express.Router();
const {postEvents, getEvents, getTopEvents} = require("../controllers/events.controller");
const protectRoute = require("../middleware/protecteRoute");


router.post("/create/event",protectRoute , postEvents);
router.get("/events", getEvents);
router.get("/events/top", getTopEvents);


module.exports = router;