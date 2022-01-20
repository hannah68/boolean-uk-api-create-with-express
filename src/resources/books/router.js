const express = require("express");
<<<<<<< HEAD
const {createOne, getAll, getOneBookById, getFictionBooks, getNonFictionBooks} = require("./controller");
=======
const {createOne, getAll, getOneBookById} = require("./controller");
>>>>>>> e9bae51ea7ed9b1a1af666619b57e4597d9beeb8
const router = express.Router();

router.post("/", createOne);
router.get("/", getAll);
<<<<<<< HEAD
router.get("/fiction", getFictionBooks);
router.get("/non-fiction", getNonFictionBooks);
router.get("/:id", getOneBookById);



module.exports = router;
=======
router.get("/:id", getOneBookById);

module.exports = router;

>>>>>>> e9bae51ea7ed9b1a1af666619b57e4597d9beeb8
