import { db } from "../../config/variables.js";
let user = await db.collection("taquilla");

export const taquillasDelete = async (req, res) => {
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


export const taquillaPOSTO = async (req, res) => {
    try {
      
      await user.insertOne(req.body);
      
      return res.send(data);
    } catch (error) {
      res.status(400).send({ status: 400, message: error });
    }
  };