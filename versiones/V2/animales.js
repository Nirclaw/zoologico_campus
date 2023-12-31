import { db } from "../../config/variables.js";
import { autoIncrement } from "../../helpers/autoincrement.js";
import { validationResult } from "express-validator";

let animales = await db.collection("animales");

/*
    {
        "nombre": "Tigre",
        "especie": "Tigre",
        "edad": 18,
        "tipo_alimentacion": "carne",
        "sexo": "macho",
        "altura": 1.43,
        "peso": "54 kilos",
        "zona": "Zona de carnivoros",
        "habitat": "Sabana",
        "historial_medico": "Fuerte"
    }
*/
export const animalsPost = async (req, res) => {
    try {

        let errors = validationResult(req);
        let objErrors = []

        errors.errors.forEach((val) => {
            objErrors.push(val.msg)
        });

        if(!errors.isEmpty()) return res.status(400).json({status: 429, message: objErrors})        

        let newID = await autoIncrement("animales")

        await animales.insertOne({
            id: newID,
            ...req.body
        })
            
        res.status(200).send({status: 200, message: "Registro creado con exito"});

    } catch (error) {
        res.status(400).send({ status: 400, message: error });
    }
};

export const animalsPut = async (req, res) => {
    
    try {

        let errors = validationResult(req);
        let objErrors = []

        errors.errors.forEach((val) => {
            objErrors.push(val.msg)
        });

        if(!errors.isEmpty()) return res.status(400).json({status: 429, message: objErrors})    

        let id = req.params.id
        id = parseInt(id)

        let consulta = await db.collection("animales").findOne(
            {id: id}
        )

        if(!consulta) return res.status(200).send({status:400, message: "Este id no existe"})

        await animales.updateOne(
            { id: id },
            { $set: req.body }
        )
            
        return res.status(200).send({status: 200, message: "Registro actualizado con exito"});

    } catch (error) {
      res.status(400).send({ status: 400, message: error });
    }
};

export const animalsDelete = async (req, res) => {
    try {

        let errors = validationResult(req);

        if(!errors.isEmpty()) return res.status(400).json({status: 429, message: errors.errors[0].msg})  

        let id = req.params.id
        id = parseInt(id)

        let consulta = await db.collection("animales").findOne(
            {id: id}
        )

        if(!consulta) return res.status(200).send({status:400, message: "Este id no existe"})

        await animales.deleteOne(
            { id: id },
        )
            
        res.status(200).send({status: 200, message: "Registro eliminado con exito"});

    } catch (error) {
      res.status(400).send({ status: 400, message: error });
    }
};