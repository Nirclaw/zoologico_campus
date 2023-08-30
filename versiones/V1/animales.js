import { db } from "../../config/variables.js";

let animales = await db.collection("animales");

export const animalsAll = async (req, res) => {
    try {
        let data = await animales.aggregate(
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

export const animalsFood = async (req, res) => {
    try {

        let food = req.params.food

        let data = await animales.aggregate(
            [
                {
                    $match: {
                        tipo_alimentacion: food,
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

export const animalsHabit = async (req, res) => {
    try {
        
        let habit = req.params.habit

        let data = await animales.aggregate(
            [
                {
                    $match: {
                        habitat: { $regex: `${habit}`, $options: "i" },
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


export const animalsName = async (req, res) => {
    try {
        
        let name = req.params.name

        let data = await animales.aggregate(
            [
                {
                    $match: {
                        nombre: { $regex: `${name}`, $options: "i" },
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