import { getConnection, sql } from "../database/conection.js";
import querys from "../database/querys.js";

export const getTasks = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllTalks);
    res.json(result.recordset);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTasks = async (req, res) => {
  try {
    const { title, description } = req.body;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("title", sql.VarChar, title)
      .input("description", sql.Text, description)
      .query(querys.createTalk);

    res.json({
      title,
      description,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id", id)
      .query(querys.getTalkById);

    if (result.recordset.length === 0)
      return res.status(404).json({ message: "Tarea no encontrada" });

    res.json(result.recordset[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id", id)
      .query(querys.deleteTalk);

    result.affectedRows === 0
      ? res.status(404).json({ message: "Tarea no encontrada" })
      : res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("id", sql.Int, req.params.id)
      .input("title", sql.VarChar, req.body.title)
      .input("description", sql.Text, req.body.description)
      .query(querys.actualizarTask);
    res.json({
      id: req.params.id,
      title: req.body.title,
      description: req.body.description,
    });

    if (!req.body.title || !req.body.description) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
