import { check } from "express-validator";

export const validateZonasParams = [
    check("id")
    .isInt()
    .not()
    .withMessage("El parametro 'id' tiene que ser un numero entero")
]

export const validateZonasBody = [
    check("nombre")
    .matches(/[\s\w\sáéíóúüñ]+$/i)
    .isString()
    .not()
    .withMessage("el campo 'nombre' es obligatorio y tiene que ser un string"),

    check("clasificacion")
    .matches(/[a-z-A-Z\s\w]+$/)
    .isString()
    .not()
    .withMessage("el campo 'clasificacion' es obligatorio y tiene que ser un string"),

    check("descripcion")
    .matches(/[a-z-A-Z\s]+$/)
    .isString()
    .not()
    .withMessage("el campo 'descripcion' es obligatorio y tiene que ser un string"),

    check("dimension")
    .isObject()
    .not()
    .withMessage("el campo 'dimension' es obligatorio, es un objeto que contiene 'ancho', 'largo'"),

    check("dimension.ancho")
    .isInt()
    .not()
    .withMessage("el campo 'ancho' es obligatorio y tiene que ser un numero entero"),

    check("dimension.largo")
    .isInt()
    .not()
    .withMessage("el campo 'largo' es obligatorio y tiene que ser un numero entero")
]