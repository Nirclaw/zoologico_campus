import { check } from "express-validator";

export const validateInsumosParams = [
    check("id")
    .isInt().withMessage("El parametro 'id' tiene que ser un numero entero")
    .not()
]

export const validateInsumosBody = [
    check("nombre")
    .isString()
    .not()
    .withMessage("el campo 'nombre' es obligatorio y tiene que ser un string"),

    check("descripcion")
    .isString()
    .not()
    .withMessage("el campo 'descripcion' es obligatorio y tiene que ser un string"),

    check("fecha_compra")
    .isString()
    .not()
    .withMessage("el campo 'fecha_compra' es obligatorio y tiene que ser un string con formato 'AAAA/MM/DD'"),

    check("cantidad")
    .isFloat()
    .not()
    .withMessage("el campo 'cantidad' es obligatorio y tiene que ser un numero entero"),

    check("proveedor")
    .isString()
    .not()
    .withMessage("el campo 'proveedor' es obligatorio y tiene que ser un string")
]