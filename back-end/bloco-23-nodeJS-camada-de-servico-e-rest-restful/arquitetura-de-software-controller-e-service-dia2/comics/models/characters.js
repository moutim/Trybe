const connection = require('../db');

// buscar todos os dados no banco
const getAll = () => {
    return connection.execute("SELECT * FROM characters");
}

// buscar character pelo ID
const getById = (id) => {
    return connection.execute("SELECT * FROM characters WHERE id = ?", [id]);
}

// inserir um novo character e retorna o id da inserção
const add = async (name, cartoon, year) => {
    const [row] = await connection.execute("INSERT INTO characters (name, cartoon, year) VALUES (?,?,?)", [name, cartoon, year]);
    const result = {
        id: row.insertId,
        name, 
        cartoon, 
        year
    }
    return result;
}

const update = async (id, name, cartoon, year) => {
    const [result] = await connection.execute(
      `UPDATE characters
        SET name = ?, cartoon = ?, year = ?
        WHERE id = ?`,
      [name, cartoon, year, id]
    );
    return result.affectedRows;
  }
  
  const exclude = (id) =>
     connection.execute(
      `DELETE FROM characters
      WHERE id = ?`,
      [id]
    );

module.exports = {
    getAll,
    getById,
    add,
    update,
    exclude
}