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

// get books by their fiction type==============
async function getFictionBooks(req,res){
    const bookType = Book().getFictionType;

    if(req.query.topic){
        const topic = req.query.topic
        const bookTopic = await bookType(topic);
        return res.json({ data: bookTopic });
    }else{
        const thisBookRes = await bookType("fiction");
        return res.json({ data: thisBookRes });
    }
}

// get books by non-fiction type=================
async function getNonFictionBooks(req,res){
    const bookType = Book().getNonFictionType;
    
    
}

module.exports = {
    createOne,
    getAll,
    getOneBookById,
    getFictionBooks,
    getNonFictionBooks
};