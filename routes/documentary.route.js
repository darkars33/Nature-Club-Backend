const express = require("express");
const router = express.Router();
const {postDocumentary, getDocumentaries} = require("../controllers/documentary.controller");
const protectRoute = require("../middleware/protecteRoute");

router.post("/create/documentary",protectRoute, postDocumentary);
router.get("/documentaries", getDocumentaries);


module.exports = router;