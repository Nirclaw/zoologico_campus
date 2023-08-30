import { db } from "../../config/variables.js";

let insumos = await db.collection("insumos");

export const insumosAll = async (req, res) => {
    try {
        
        let data = await insumos.aggregate(
            [
                {
                    $project: {
                    _id: 0,
                    },
                },
            ]
        ).toArray();

        res.send(data);

    } catch (error) {
      res.status(400).send({ status: 400, message: error });
    }
};

export const insumosName = async (req, res) => {
    try {

        let nombre = req.params.nombre

        let data = await insumos.aggregate(
            [
                {
                    $match: {
                        nombre: { $regex: `${nombre}`, $options: "i" },
                    },
                },
                {
                    $project: {
                    _id: 0,
                    },
                },
            ]
        ).toArray();

        res.send(data);

    } catch (error) {
      res.status(400).send({ status: 400, message: error });
    }
};