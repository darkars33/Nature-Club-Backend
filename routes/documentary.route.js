const express = require("express");
const router = express.Router();
const {postDocumentary, getDocumentaries} = require("../controllers/documentary.controller");

router.post("/documentary", postDocumentary);
router.get("/documentaries", getDocumentaries);


module.exports = router;