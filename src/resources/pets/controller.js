const Pet = require("./model");
const db  = require("../../utils/database");

Pet().init();


// create one pet=====================
async function createOne(req, res){
    const petToCreate = {
        ...req.body
    }
    const createOne = Pet().createOnePet;
    const thisPetRes = await createOne(petToCreate, res);
    return res.json({ data: thisPetRes });
}

// get all Pets======================
async function getAll(req, res){
    const all = Pet().getAllPets;
    const thisPetRes = await all(res);
    return res.json({data: thisPetRes})
}

// get a Pet with an id==============
async function getOnePetById(req, res){
    const idToGet = req.params.id;
  
    const one = Pet().getOneById;
    const thisPetRes = await one(idToGet);
    return res.json({ data: thisPetRes });
}

// get pets by all types==============
async function getPetsType(req,res){
    const petsTypes = await Pet().getAllPetsType()
    return res.json({ data: petsTypes });
}

// get pets by type===================
async function getPetsbyType(req,res){
    const type = req.path.slice(1);
    
    if(req.query.breed){
        const breed = req.query.breed;
        const petsBreed = await Pet().getPetsBreedType(breed, type);
        return res.json({ data: petsBreed });
    }else{
        const petsTypes = await Pet().getPetsType(type);
        return res.json({ data: petsTypes });
    }
    
}
  
module.exports = {
    createOne,
    getAll,
    getOnePetById,
    getPetsType,
    getPetsbyType
};
