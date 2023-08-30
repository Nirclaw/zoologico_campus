import { db } from "../../config/variables.js";
import { autoIncrement } from "../../helpers/autoincrement.js";

let zonas = await db.collection("zonas");

/*
    {
        "nombre": "Zona",
        "clasificacion": "Clasificación C - Bajo riesgo",
        "descripcion": "Zona",
        "dimension": {
            "ancho": 100,
            "largo": 70
        }
    }
*/
export const zonasPost = async (req, res) => {
    try {
        let newID = await autoIncrement("zonas")

        let data = await zonas.insertOne({
            id: newID,
            ...req.body
        })
            
        res.status(200).send({status: 200, message: "Registro creado con exito"});

    } catch (error) {
      res.status(400).send({ status: 400, message: error });
    }
};

export const zonasPut = async (req, res) => {
    try {
        let id = req.params.id
        id = parseInt(id)

        let consulta = await db.collection("zonas").findOne(
            {id: id}
        )

        if(!consulta) return res.status(200).send({status:400, message: "Este id no existe"})

        await zonas.updateOne(
            { id: id },
            { $set: req.body }
        )
            
        res.status(200).send({status: 200, message: "Registro actualizado con exito"});

    } catch (error) {
      res.status(400).send({ status: 400, message: error });
    }
};

export const zonasDelete = async (req, res) => {
    try {
        let id = req.params.id
        id = parseInt(id)

        let consulta = await db.collection("animales").findOne(
            {id: id}
        )

        if(!consulta) return res.status(200).send({status:400, message: "Este id no existe"})

        await zonas.deleteOne(
            { id: id },
        )
            
        res.status(200).send({status: 200, message: "Registro eliminado con exito"});

    } catch (error) {
      res.status(400).send({ status: 400, message: error });
    }
};