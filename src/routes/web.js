const express = require("express");
const { getHomePage, render } = require("../controllers/homeController");
const router = express.Router()

router.get('/', getHomePage)

router.get("/home", render);

module.exports = router;