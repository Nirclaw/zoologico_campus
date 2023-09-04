import { con } from "../conexion/conexion.js"; 

export const autoIncrement = async (colleccionName) =>{

    const db = await con();
    const coleccion = db.collection("contador");

    const resultado = await coleccion.findOneAndUpdate(

        { ID: `${colleccionName}id` },
        { $inc: { sequenceValue: 1 } },
        { returnDocument: "after" }
    );

    return resultado.value.sequenceValue;

}