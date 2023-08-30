import { db } from "../../config/variables.js";

let zonas = await db.collection("zonas");

export const zonasAll = async (req, res) => {
    try {
        
        let data = await zonas.aggregate(
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

export const zonasName = async (req, res) => {
    try {

        let nombre = req.params.nombre

        let data = await zonas.aggregate(
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