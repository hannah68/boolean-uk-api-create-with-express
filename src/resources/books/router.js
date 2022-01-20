const express = require("express");
const {createOne, getAll, getOneBookById} = require("./controller");
const router = express.Router();

router.post("/", createOne);
router.get("/", getAll);
router.get("/:id", getOneBookById);

module.exports = router;

