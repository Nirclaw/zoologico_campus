import { validationResult } from "express-validator";
import { db } from "../../config/variables.js";
import { autoIncrement } from "../../helpers/autoincrement.js";

let user = await db.collection("empleados");

export const empleadosDelete = async (req, res) => {
  try {
    let validar = await user.findOne({
      cedula: parseInt(req.params.id),
    });
    if (!validar)
      return res
        .status(400)
        .send({ status: 400, message: "el usuario no existe" });
    await user.deleteOne({
      cedula: parseInt(req.params.id),
    });
    return res.send({ message: "eliminado con exito" });
  } catch (error) {
    res.status(400).send({ status: 400, message: "no se pudo eliminar " });
  }
};

export const empleadoPUT = async (req, res) => {
  try {
    let validar = await user.findOne({
      cedula: parseInt(req.params.id),
    });
    if (!validar)
      return res
        .status(400)
        .send({ status: 400, message: "el usuario no existe" });
    await user.updateOne(validar, {
      $set: req.body,
    });
    return res.send("actualizado con exito");
  } catch (error) {
    res.status(400).send({ status: 400, message: "no se pudo actualizar " });
  }
};

export const empleadoPOSTO = async (req, res) => {
  try {
    const error = validationResult(req);
      if (!error.isEmpty()) return res.status(400).json({status:400,message:error.errors[0]});




    let newID = await autoIncrement("empleados")

        let data = await user.insertOne({
            id: newID,
            ...req.body
        })
    return res.send(data);
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
};
