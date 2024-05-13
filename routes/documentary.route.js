const express = require("express");
const router = express.Router();
const {postDocumentary, getDocumentaries} = require("../controllers/documentary.controller");

router.post("/create/documentary", postDocumentary);
router.get("/documentaries", getDocumentaries);


module.exports = router;