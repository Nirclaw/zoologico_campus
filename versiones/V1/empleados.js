import { db } from "../../config/variables.js";

let user = await db.collection("empleados");
export const empleadosGet = async (req, res) => {
  try {
    let data = await user
      .aggregate([
        {
          $project: {
            _id: 0,
          },
        },
      ])
      .toArray();
    res.send(data);
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
};

export const empleadoGetCedula = async (req, res) => {
  try {
    let data = await user
      .aggregate([
        {
          $match: {
            cedula: parseInt(req.params.id),
          },
        },
        {
          $project: {
            _id: 0,
          },
        },
      ])
      .toArray();
    res.send(data);
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
};

export const empleadoGetnombre = async (req, res) => {
  try {
    let data = await user
      .aggregate([
        {
          $match: {
            nombre: { $regex: `${req.params.nom}`, $options: "i" },
          },
        },
        {
          $project: {
            _id: 0,
          },
        },
      ])
      .toArray();
    res.send(data);
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
};
export const empleadoCargo = async (req, res) => {
  try {
    let data = await user
      .aggregate([
        {
          $match: {
            cargo: { $regex: `${req.params.nom}`, $options: "i" },
          },
        },
        {
          $project: {
            _id: 0,
          },
        },
      ])
      .toArray();
    res.send(data);
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
};
