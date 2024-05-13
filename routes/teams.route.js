const express = require("express");
const router = express.Router();
const {postTeam, getTeams} = require("../controllers/teams.controller");

router.post('/create/team', postTeam);
router.get('/teams', getTeams);

module.exports = router;