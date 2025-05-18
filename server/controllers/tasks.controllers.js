import querys from "../database/querys.js";
import { getConnection, sql } from "../database/conection.js";

export const getTasks = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllTalks);
    res.json(result.recordset);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTasks = async (req, res) => {
  try {
    const { title, description } = req.body;
    const pool = await getConnection();
    await pool
      .request()
      .input("title", sql.VarChar, title)
      .input("description", sql.Text, description)
      .query(querys.createTalk);

    res.json({ title, description });
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
      .input("Id", sql.Int, id)
      .query(querys.getTalkById);

    if (result.recordset.length === 0)
      return res.status(404).json({ message: "Tarea no encontrada" });

    res.json(result.recordset[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id", sql.Int, id)
      .query(querys.deleteTalk);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    if (!req.body.title || !req.body.description) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, req.params.id)
      .input("title", sql.VarChar, req.body.title)
      .input("description", sql.Text, req.body.description)
      .query(querys.actualizarTask);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    res.json({
      id: req.params.id,
      title: req.body.title,
      description: req.body.description,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
