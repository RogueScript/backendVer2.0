const express = require("express");
const router = express.Router();
const {controlFile} = require("../controllers/control.js")
router.post( "/", controlFile);
module.exports = router;