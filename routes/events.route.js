const express = require("express");
const router = express.Router();
const {postEvents, getEvents} = require("../controllers/events.controller");


router.post("/event", postEvents);
router.get("/events", getEvents);


module.exports = router;