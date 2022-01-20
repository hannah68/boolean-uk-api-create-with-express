<<<<<<< HEAD

=======
>>>>>>> e9bae51ea7ed9b1a1af666619b57e4597d9beeb8
const express = require("express");
const {createOne, getAll, getOnePetById} = require("./controller");
const router = express.Router();

router.post("/", createOne);
router.get("/", getAll);
router.get("/:id", getOnePetById);

module.exports = router;