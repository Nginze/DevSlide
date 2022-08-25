const { Router } = require("express");
const { search } = require("../controllers/searchController");
const { db } = require("../db/config");

const router = Router();

router.get("/", search);

module.exports = router;
