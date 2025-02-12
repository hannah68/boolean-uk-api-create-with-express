const express = require("express");
const {
    createOne, 
    getAll, 
    getOnePetById, 
    getPetsType,
    getPetsbyType
} = require("./controller");
const router = express.Router();

router.post("/", createOne);
router.get("/", getAll);
router.get('/dog', getPetsbyType);
router.get('/cat', getPetsbyType);
router.get('/snake', getPetsbyType);
router.get('/horse', getPetsbyType);
router.get('/bird', getPetsbyType);
router.get('/rabbit', getPetsbyType);
router.get("/types", getPetsType);
router.get("/:id", getOnePetById);


module.exports = router;