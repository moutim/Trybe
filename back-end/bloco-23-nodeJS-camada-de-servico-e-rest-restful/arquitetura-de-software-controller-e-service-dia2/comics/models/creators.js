const connection = require('../db');

const getAll = () =>
    connection.execute(
        `SELECT * FROM creators`
    );

const getAllTables = () =>
    connection.execute(
        `SELECT * FROM creators 
      INNER JOIN characters 
      ON creators.id_characters = characters.id`
    );

const getById = (id) =>
    connection.execute(
        `SELECT * FROM creators 
      INNER JOIN characters 
      ON creators.id_characters = characters.id
      WHERE creators.id = ?`,
        [id]
    );

const add = async (name, birthDate, idCharacter) => {
    const [row] = await connection.execute("INSERT INTO creators (name, birth_date, id_characters) VALUES (?,?,?)", [name, birthDate, idCharacter]);
    const result = {
        id: row.insertId,
        name,
        birthDate,
        idCharacter
    }
    return result;
}

const update = async (id, name, birth_date, id_character) => {
    const [result] = await connection.execute(
        `UPDATE creators
        SET name = ?, birth_date = ?, id_characters = ?
        WHERE id = ?`,
        [name, birth_date, id_character, id]
    );

    return result.affectedRows;
}

const exclude = async (id) =>
    connection.execute(
        `DELETE FROM creators
      WHERE id = ?`,
        [id]
    );

module.exports = {
    getAll,
    getAllTables,
    getById,
    add,
    update,
    exclude
}


