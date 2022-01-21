const express = require("express");
const router = express.Router();
const {
    createOne, 
    getAll, 
    getOneBookById, 
    getFictionBooks, 
    getNonFictionBooks,
    getAuthorBooks
} = require("./controller");



router.post("/", createOne);
router.get("/", getAll);
router.get("/fiction", getFictionBooks);
router.get("/non-fiction", getNonFictionBooks);
router.get("/:id", getOneBookById);
router.get("/author/:author", getAuthorBooks);


module.exports = router;
