import { db } from "../../config/variables.js";

let user = await db.collection("taquilla");

export const taquillasGet = async (req, res) => {
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

export const taquillaGetCedula = async (req, res) => {
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

export const taquillaGetId = async (req, res) => {
    try {
      let data = await user
        .aggregate([
          {
            $match: {
              id: parseInt(req.params.id),
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