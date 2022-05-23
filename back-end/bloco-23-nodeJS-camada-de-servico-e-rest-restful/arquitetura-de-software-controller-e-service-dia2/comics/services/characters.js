const charactersModel = require('../models/characters');
const creatorsModel = require('../models/creators');

const getCharacters = (id = null) => {
    if (id) {
        return charactersModel.getById(id);
    }
    return charactersModel.getAll();
}

const createCharacters = async ({name, cartoon, year, creators}) => {
    const { id } = await charactersModel.add(name, cartoon, year);
    const insertedCreatorsPromises = [];
    creators.map (c => insertedCreatorsPromises.push(creatorsModel.add(c.name, c.birthDate, id)));
    const insertedCreators = await Promise.all(insertedCreatorsPromises);
    return {
        id,
        name,
        cartoon,
        year,
        creators: insertedCreators
    }
}

const updateCharacter = (id, { name, cartoon, year }) => {
    return charactersModel.update(id, name, cartoon, year);
}

module.exports = {
    getCharacters,
    createCharacters,
    updateCharacter
}