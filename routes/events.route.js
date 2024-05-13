const express = require("express");
const router = express.Router();
const {postEvents, getEvents, getTopEvents} = require("../controllers/events.controller");


router.post("/create/event", postEvents);
router.get("/events", getEvents);
router.get("/events/top", getTopEvents);


module.exports = router;