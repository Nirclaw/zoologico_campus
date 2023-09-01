import { SignJWT, jwtVerify } from "jose";
import { PASSWORD, db } from "../config/variables.js";
import { ObjectId } from "mongodb";

export const CreateToken = async (req, res) => {
  if (Object.keys(req.body).length === 0)
    return res.status(400).send({ status: 400, message: "Datos no enviados" });

  const busqueda = await db
    .collection("roles")
    .aggregate([
      {
        $match: {
          $and: [{ user: req.body.user }, { password: req.body.password }],
        },
      },
    ])
    .toArray();

  if (Object.keys(busqueda).length === 0)
    return res
      .status(400)
      .send({ status: 400, message: "el usuario no existe" });
  const id = busqueda;
  const encode = new TextEncoder();
  const createJTW = await new SignJWT({ id })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime("3h")
    .sign(encode.encode(PASSWORD));

    const llave = "Bearer " + createJTW;
    res.send({status: 200, message: llave});
};

export const ValidarToken = async (req, Token) => {
  try {
    const encode = new TextEncoder();
    const jwData = await jwtVerify(Token, encode.encode(PASSWORD));

    let busqueda = await db.collection("roles").findOne({
      _id: new ObjectId(jwData.payload.id[0]._id),
      [`permisos.${req.baseUrl}`]: `${req.headers["accept-version"]}`,
    });
    let { _id, permisos, ...Usuario } = busqueda;
    return Usuario;
  } catch (error) {
    return false;
  }
};
