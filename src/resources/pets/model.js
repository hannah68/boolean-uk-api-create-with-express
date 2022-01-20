const db = require("../../utils/database");
const { buildAnimalDatabase } = require("../../utils/mockData");

function Pet() {
  // create table==================================================
  function createTable() {
    const sql = `
      DROP TABLE IF EXISTS pets;
      CREATE TABLE IF NOT EXISTS pets (
        id        SERIAL        PRIMARY KEY,
        name      VARCHAR(255)   NOT NULL,
        age       INTEGER       NOT NULL,
        type      VARCHAR(255)   NOT NULL,
        breed     VARCHAR(255)   NOT NULL,
        microchip BOOLEAN       NOT NULL
      );
    `;

    return db
      .query(sql)
      .then((result) => console.log("[DB] Pet table ready."))
      .catch(console.error);
  }

  // get all pets===============================================
  function getAllPets(res){
    const getAll = `
      SELECT * FROM Pets
    `;
    return db
      .query(getAll)
      .then(result => result.rows)
      .catch(console.error);
  }

  
  // create one pet =============================================
  function createOnePet(pet){
    const createOne = `
      INSERT INTO pets (name, age, type, breed, microchip)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    return db
      .query(createOne, [pet.name, pet.age, pet.type, pet.breed, pet.microchip])
      .then(result => result.rows[0])
      .catch(console.error);
  }

  // create one pet by id======================================
  function getOneById(id,res){
    const getOneById = `
      SELECT *
      FROM pets
      WHERE id = $1;
    `;

    return db
      .query(getOneById, [id])
      .then(result => result.rows[0])
      .catch(console.error);
  }

  // mock data ==========================================
  function mockData() {
    const createPet = `
      INSERT INTO pets
        (name, age, type, breed, microchip)
      VALUES
        ($1, $2, $3, $4, $5)
    `;

    const pets = buildAnimalDatabase();

    pets.forEach((pet) => {
      db.query(createPet, Object.values(pet));
    });
  }

  
  function init() {
    console.log("\nCreating mock data for Pets...\n")
    createTable();
    mockData();
  }

  return {
    createOnePet,
    getOneById,
    getAllPets,
    init
  };
  
}

module.exports = Pet;