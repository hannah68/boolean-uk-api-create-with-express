const express = require("express");
const {createOne, getAll, getOneBookById, getFictionBooks, getNonFictionBooks} = require("./controller");
const router = express.Router();

router.post("/", createOne);
router.get("/", getAll);
router.get("/fiction", getFictionBooks);
router.get("/non-fiction", getNonFictionBooks);
router.get("/:id", getOneBookById);



module.exports = router;