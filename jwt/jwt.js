import { SignJWT } from "jose";
import { PASSWORD, db } from "../config/variables.js";

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

    const llave = createJTW
  res.send({llave});
};
