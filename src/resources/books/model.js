const db = require("../../utils/database");
const { buildBooksDatabase } = require("../../utils/mockData");

function Book() {
  // create table==================================================
  function createTable() {
    const sql = `
      DROP TABLE IF EXISTS books;
      
      CREATE TABLE IF NOT EXISTS books (
        id              SERIAL        PRIMARY KEY,
        title           VARCHAR(255)   NOT NULL,
        type            VARCHAR(255)   NOT NULL,
        author          VARCHAR(255)   NOT NULL,
        topic           VARCHAR(255)   NOT NULL,
        publicationDate DATE           NOT NULL
      );
    `;

    return db
      .query(sql)
      .then((result) => console.log("[DB] Book table ready."))
      .catch(console.error);
  }

  // get all books===============================================
  function getAllBooks(res){
    const getAll = `
      SELECT * FROM Books
    `;
    return db
      .query(getAll)
      .then(result => result.rows)
      .catch(console.error);
  }

  // create one book =============================================
  function createOneBook(book){
    const createOne = `
      INSERT INTO books (title, type, author, topic, publicationDate)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    return db
      .query(createOne, [book.title, book.type, book.author, book.topic, book.publicationDate])
      .then(result => result.rows[0])
      .catch(console.error);
  }

  // create one book by id======================================
  function getOneById(id,res){
    const getOneById = `
      SELECT *
      FROM books
      WHERE id = $1;
    `;

    return db
      .query(getOneById, [id])
      .then(result => result.rows[0])
      .catch(console.error);
  }


  // mock data===================================================
  function mockData() {
    const createBook = `
      INSERT INTO books
        (title, type, author, topic, publicationDate)
      VALUES
        ($1, $2, $3, $4, $5)
    `;
    const books = buildBooksDatabase();
    books.forEach((book) => {
      db.query(createBook, Object.values(book)).catch(console.error);
    });
  }

  function init() {
    console.log("\nCreating mock data for Books...\n")
    createTable();
    mockData();
  }

  return {
    createOneBook,
    getOneById,
    getAllBooks,
    init
  };
}

module.exports = Book;
