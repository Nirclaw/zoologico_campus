import { db } from "../../config/variables.js";
import { autoIncrement } from "../../helpers/autoincrement.js";
import { validationResult } from "express-validator";

let insumos = await db.collection("insumos");

/*
    {
        "nombre": "Ibuprofeno 3800 mg",
        "descripcion": "analgésico",
        "fecha_compra": "2023-08-05",
        "cantidad": 80,
        "proveedor": "SaludTotal"
    }
*/
export const insumosPost = async (req, res) => {
    try {

        let errors = validationResult(req);
        let objErrors = []

        errors.errors.forEach((val) => {
            objErrors.push(val.msg)
        });

        if(!errors.isEmpty()) return res.status(400).json({status: 429, message: objErrors}) 

        let newID = await autoIncrement("insumos")

        let data = await insumos.insertOne({
            id: newID,
            ...req.body
        })
            
        res.status(200).send({status: 200, message: "Registro creado con exito"});

    } catch (error) {
      res.status(400).send({ status: 400, message: error });
    }
};

export const insumosPut = async (req, res) => {
    try {

        let errors = validationResult(req);
        let objErrors = []

        errors.errors.forEach((val) => {
            objErrors.push(val.msg)
        });

        if(!errors.isEmpty()) return res.status(400).json({status: 429, message: objErrors}) 

        let id = req.params.id
        id = parseInt(id)

        let consulta = await db.collection("insumos").findOne(
            {id: id}
        )

        if(!consulta) return res.status(200).send({status:400, message: "Este id no existe"})

        await insumos.updateOne(
            { id: id },
            { $set: req.body }
        )
            
        res.status(200).send({status: 200, message: "Registro actualizado con exito"});

    } catch (error) {
      res.status(400).send({ status: 400, message: error });
    }
};

export const insumosDelete = async (req, res) => {
    try {

        let errors = validationResult(req);

        if(!errors.isEmpty()) return res.status(400).json({status: 429, message: errors.errors[0].msg}) 

        let id = req.params.id
        id = parseInt(id)

        let consulta = await db.collection("insumos").findOne(
            {id: id}
        )

        if(!consulta) return res.status(200).send({status:400, message: "Este id no existe"})

        await insumos.deleteOne(
            { id: id },
        )
            
        res.status(200).send({status: 200, message: "Registro eliminado con exito"});

    } catch (error) {
      res.status(400).send({ status: 400, message: error });
    }
};