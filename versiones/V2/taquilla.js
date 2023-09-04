import { validationResult } from "express-validator";
import { db } from "../../config/variables.js";
import { autoIncrement } from "../../helpers/autoincrement.js";
let user = await db.collection("taquilla");

export const taquillasDelete = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty())
      return res.status(400).json({ status: 400, message: error.errors[0] });
    let validar = await user.findOne({
      cedula: parseInt(req.params.id),
    });
    if (!validar)
      return res
        .status(400)
        .send({ status: 400, message: "la taquilla no existe" });
    await user.deleteOne({
      cedula: parseInt(req.params.id),
    });
    return res.send({status:200, message: "eliminado con exito" });
  } catch (error) {
    res.status(400).send({ status: 400, message: "no se pudo eliminar " });
  }
};

export const taquillaPOSTO = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty())
      return res.status(400).send({ status: 400, message: error.error[0] });

    let newID = await autoIncrement("taquilla");
   let data = await user.insertOne({
      id: newID,
      ...req.body,
    });

    return res.send({status:200,message:"Creado con exito"});
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
};
