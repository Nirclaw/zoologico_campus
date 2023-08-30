import { check } from "express-validator";

/*{
    "id": 26,
    "cedula": 110231231,
    "nombre": "Maria Camila Prieto",
    "telefono": "+301 3252154775",
    "fecha_ingreso": "2023-08-24",
    "categoria": {
      "tipo": "basico",
      "precio": 120000
    }
  }*/

export const taquillaDTOpost = [
  check("cedula")
    .notEmpty()
    .withMessage("La cédula no debe estar vacía")
    .isNumeric()
    .withMessage("La cédula debe ser un valor de tipo numerico")
    .withMessage("La cédula debe contener solo caracteres alfanuméricos"),

  check("nombre")
    .notEmpty()
    .withMessage("El nombre no debe estar vacío")
    .isString()
    .withMessage("El nombre debe ser un valor de tipo cadena")
    .matches(/^[\w\sáéíóúüñ]+$/i)
    .withMessage(
      "El nombre solo debe contener letras, espacios y caracteres especiales como acentos"
    ),

  check("telefono")
    .notEmpty()
    .withMessage("El teléfono no debe estar vacío")
    .isString()
    .withMessage("El teléfono debe ser un valor de tipo cadena")
    .matches(/^[\d\s\-]+$/)
    .withMessage("El teléfono debe contener solo números, espacios y guiones"),

  check("fecha_ingreso")
    .notEmpty()
    .withMessage("La fecha de ingreso no debe estar vacía")
    .matches(/^\d{4}-\d{2}-\d{2}$/)
    .withMessage("La fecha de ingreso debe tener el formato yyyy-mm-dd"),

  check("categoria.tipo")
    .notEmpty()
    .withMessage("El tipo de categoría no debe estar vacío")
    .isString()
    .withMessage("El tipo de categoría debe ser un valor de tipo cadena")
    .isIn(["basico", "vip"])
    .withMessage("El tipo de categoría debe ser 'basico' o 'vip'"),

  check("categoria.precio")
    .notEmpty()
    .withMessage("El precio de la categoría no debe estar vacío")
    .isNumeric()
    .withMessage("El precio debe ser un valor numérico"),
];

export const taquillaDTOdelete = [
  check("id")
    .notEmpty()
    .withMessage("La cédula no debe estar vacía")
    .isNumeric()
    .withMessage("La cédula debe ser un valor de tipo numerico")
    .withMessage("La cédula debe contener solo caracteres alfanuméricos"),
];
