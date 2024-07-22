const express = require("express");
const router = express.Router();
const {postTeam, getTeams} = require("../controllers/teams.controller");
const protectRoute = require("../middleware/protecteRoute");

router.post('/create/team', postTeam);
router.get('/teams', getTeams);

module.exports = router;