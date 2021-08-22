const express = require("express");
const { getProducst } = require("../controllers/products");

const router = express.Router();

router.get("/", getProducst);

module.exports = router;
