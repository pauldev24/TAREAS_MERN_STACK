//el (req, res) es para enviar mensajes al cliente
import { con } from "../db.js";

export const getTasks = async (req, res) => {
  try {
    const [result] = await con.query(
      "SELECT * FROM tasks ORDER BY createAt ASC"
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const [result] = await con.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    //Valida si encontro
    if (result.length == 0) {
      return res.status(404).json({ mensaje: "Tarea no encontrada" });
    } else {
      res.json(result[0]);
    }
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await con.query(
      "INSERT INTO tasks(title,description) VALUES (?,?)",
      [title, description]
    );
    //Obtener el resultado de datos
    res.json({
      id: result.insertId,
      title,
      description,
    });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};
export const updateTask = async (req, res) => {
  try {
    const [result] = await con.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    //Obtener el resultado de datos
    if (result.affectedRows == 0) {
      return res.status(404).json({ mensaje: "Tarea no encontrada" });
    } else {
      return res.sendStatus(204);
    }
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};
export const deleteTask = async (req, res) => {
  try {
    const [result] = await con.query("DELETE FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    //Confirma
    if (result.affectedRows == 0) {
      return res.status(404).json({ mensaje: "Tarea no encontrada" });
    } else {
      return res.sendStatus(204);
    }
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};
