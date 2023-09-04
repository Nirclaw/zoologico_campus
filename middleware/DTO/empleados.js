import { check } from "express-validator";

export const empleadosPOST = [
  check("cedula")
    .notEmpty()
    .isNumeric()
    .withMessage("El tipo de dato es numerico"),

  check("nombre")
    .notEmpty()
    .isString()
    .matches(/^[\w\s]+$/, "i")
    .withMessage("el tipo de dato debe ser numerico"),

  check("telefono")
    .notEmpty()
    .isString()
    .matches(/^\d+$/)
    .withMessage("el tipo de es numerico"),

  check("direccion")
    .notEmpty()
    .isString()
    .whitelist("el tipo de dato es string"),

  check("correo_electronico")
    .notEmpty()
    .isString()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "i")
    .withMessage("debe ingresar un correo valido"),

  check("departamento")
    .notEmpty()
    .isString()
    .whitelist("el tipo de dato es string"),

  check("cargo")
    .notEmpty()
    .isString()
    .withMessage("el tipo de dato debe ser string"),
];

export const empleadoVPUT = [
  check("id").notEmpty().isNumeric().withMessage("El tipo de dato es numerico"),

  check("nombre")
    .notEmpty()
    .isString()
    .matches(/^[\w\s]+$/, "i")
    .withMessage("el tipo de dato debe ser string"),

  check("telefono")
    .notEmpty()
    .isString()
    .matches(/^\d+$/)
    .withMessage("el tipo de es numerico"),

  check("direccion")
    .notEmpty()
    .isString()
    .whitelist("el tipo de dato es string"),

  check("correo_electronico")
    .notEmpty()
    .isString()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "i")
    .withMessage("debe ingresar un correo valido"),

  check("departamento")
    .notEmpty()
    .isString()
    .whitelist("el tipo de dato es string"),

  check("cargo")
    .notEmpty()
    .isString()
    .withMessage("el tipo de dato debe ser string"),
];

export const empleadosDdelete = [
  check("id").notEmpty().isNumeric().withMessage("El tipo de dato es numerico"),
];
