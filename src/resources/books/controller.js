const Book = require("./model");
const db  = require("../../utils/database");

Book().init();


// create one book=====================
async function createOne(req, res){
    const bookToCreate = {
        ...req.body
    }
    const createOne = Book().createOneBook;
    const thisBookRes = await createOne(bookToCreate, res);
    return res.json({ data: thisBookRes });
}

// get all books======================
async function getAll(req, res){
    const all = Book().getAllBooks;
    const thisBookRes = await all(res);
    return res.json({data: thisBookRes})
}

// get a book with an id==============
async function getOneBookById(req, res){
    const idToGet = req.params.id;
  
    const one = Book().getOneById;
    const thisBookRes = await one(idToGet);
    return res.json({ data: thisBookRes });
}


module.exports = {
    createOne,
    getAll,
    getOneBookById
};
  

