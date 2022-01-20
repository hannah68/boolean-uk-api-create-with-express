
const express = require("express");
const {createOne, getAll, getOnePetById} = require("./controller");
const router = express.Router();

router.post("/", createOne);
router.get("/", getAll);
router.get("/:id", getOnePetById);

module.exports = router;