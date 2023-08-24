## ZOOLÓGICO CAMPUS 

Versión:  

- MongoDB 7.0

  

![](https://raw.githubusercontent.com/Nirclaw/zoologico_campus/main/img/08-12-19-Las-5-de-El-Rey-Le%C3%B3n-1.jpg)



Sumérgete en nuestro emocionante proyecto que simula un completo sistema de funcionalidades de un zoológico, impulsado por tecnologías JavaScript y MongoDB. Experimenta la emocionante exhibición de animales y explora el mundo intrigante de la arqueología, todo en un ambiente virtual.

Nuestro objetivo es brindarte una experiencia educativa única al conectar la vida silvestre con la historia humana. Utilizamos tecnologías avanzadas como JavaScript y MongoDB para recrear la diversidad de un zoológico, permitiéndote explorar animales en sus hábitats naturales y descubrir artefactos históricos en un solo lugar.

Mediante programas educativos integrales y exhibiciones multidisciplinarias, celebramos tanto la biodiversidad como la riqueza cultural, al tiempo que promovemos la sensibilización y la conservación. Únete a nosotros en este emocionante viaje de aprendizaje, donde la tecnología se combina con la naturaleza y la historia para ofrecerte una experiencia inmersiva única. ¡Bienvenido a nuestro proyecto de zoológico virtual!




## OBJETIVO Y ALCANCE

Este proyecto tiene como objetivo desarrollar un sistema de gestión para un zoológico, que permitirá el registro y seguimiento de animales, empleados, insumos, zonas del zoológico y tickets de entrada. El sistema se basará en una base de datos MongoDB y seguirá las mejores prácticas de desarrollo, incluyendo el uso de patrones DTO (Data Transfer Object), límites de peticiones por minuto, validación de entrada con JWT provisional y manejo de errores personalizados. A continuación, se detallan los aspectos clave del sistema:



#### POR QUÉ UTILIZAR MONGO? 

1. **Modelo de Datos Flexible**: Es una base de datos NoSQL orientada a documentos que almacena datos en formato BSON, esto permite una gran flexibilidad en la estructura de los datos.
2. **Escalabilidad Horizontal**: Está diseñado para la escalabilidad horizontal, lo que significa que puedes distribuir tus datos en múltiples servidores para manejar grandes volúmenes de datos y tráfico.
3. **Rendimiento**: Es conocido por su capacidad para manejar grandes cantidades de datos y consultas concurrentes.
4. **Compatibilidad con Lenguajes de Programación**: Tiene bibliotecas y controladores disponibles para una amplia variedad de lenguajes de programación, lo que facilita su integración en tu aplicación.



#### COMO SATISFACE MONGO LAS NECESIDADES DEL NEGOCIO

1. **Diseño de la Base de Datos**:
   - **Modelado de Datos**: Diseña tu base de datos teniendo en cuenta la estructura de documentos. Define cómo se organizarán los datos en colecciones y documentos.
   - **Desnormalización Controlada**: Permite la desnormalización de datos para mejorar el rendimiento de las consultas. Sin embargo, equilibra esto con el tamaño de almacenamiento y el costo.
2. **Índices Eficientes**:
   - Utiliza índices apropiados para acelerar las consultas. MongoDB admite índices simples y compuestos.
3. **Escalabilidad**:
   - Utiliza la función de fragmentación (sharding) para distribuir los datos en múltiples servidores y equilibrar la carga.
4. **Consulta y Agregación**:
   - Indexa campos utilizados en consultas frecuentes y realiza proyecciones para devolver solo los datos necesarios.
5. **Seguridad**:
   - Configura la autenticación y la autorización para proteger tu base de datos. Utiliza roles y privilegios adecuados para restringir el acceso a datos sensibles.



#### COLECCIONES PRESENTES

1. Registro de animales
2. Registro de empleados
3. Registro de insumos
4. Registro de zonas
5. Registro de tickets



#### DESCRIPCIÓN DE LAS COLECCIONES 

- ##### REGISTRO DE ANIMALES

  - Id "int" auto-incrementable

  - Nombre "string"

  - Especie "string"

  - Edad int

  - Tipo alimentación "array"

    - Plantas
    - Carne
    - Inseptos
    - Frutas

  - Sexo "Array"

    - Macho 
    - Hembra

  - Altura "string"

  - Peso "string"

  - Zona "string"

  - Habitat "string"

  - Historial Médico "string"

    

- ##### REGISTRO DE EMPLEADOS

  - Cedula "int"

  - Contraseña

  - Nombre "string"

  - Teléfono "string"

  - Dirección "string"

  - Correo electrónico "string"

  - Departamento "string"

  - Cargo "string"

    - Rol: "Admin-root, admin, user" 
    - Permisos "'user': get, 'admin': get, post put, 'admin-root': *"

    

- ##### REGISTRO DE INSUMOS

  - Id "int" auto-incrementable

  - Nombre "string"

  - Descripción "string"

  - Fecha compra "string"

  - Cantidad "int"

  - Proveedor "string"

    

- ##### REGISTRO DE ZONAS

  - Id "int" auto-incrementable

  - Nombre "string"

  - Clasificación "string"

  - Descripción "string"

  - Demensión "array"

    - Largo

    - Ancho

      

- ##### REGISTRO DE TICKETS

  - Id "int" auto-incrementable
  - Cédula "int"
  - Nombre "string"
  - Teléfono "string"
  - Fecha de ingreso "string"
  - Categoria "array"
    - Básico
    - VIP
  - Valor ticket "int"



### CONSULTAS 

##### REGISTRO DE ANIMALES

- Búsqueda de animales por clasificación basada en alimentación (herbívoro, carnívoro, omnívoro).

- Búsqueda de animales por clasificación basada en su hábitat (terrestres, acuáticos, aéreos).

- Búsqueda de animales por nombre.

- Listado de todos los animales existentes.

  

##### REGISTRO DE EMPLEADOS

- Búsqueda de empleados por cédula, nombre y cargo.

- Listado de todos los empleados.

  

##### REGISTRO DE INSUMOS

- Búsqueda de insumos por nombre.

- Listado de todos los insumos.

  

##### REGISTRO DE ZONAS

- Búsqueda de zonas por nombre.

- Listado de todas las zonas.

- Registro de nuevas zonas.

  

##### REGISTRO DE TAQUILLA

- Búsqueda de ticket por cédula.
- Búsqueda de ticket por id.
- Listado de todos los tickets.



#### EJEMPLOS DE CONSULTAS CON MONGO

- Listar todos los tickets

  use("mongo_zoo")

  db.taquilla.find()

- Búsqueda de animales por nombre.

  db.animales.find()

- Búsqueda de animales por clasificación basada en su hábitat (terrestres, acuáticos, aéreos).

  db.animales.find()

- Listado de todos los animales existentes.

  db.animales.find()



#### LIBRERIAS UTILIZADAS

El desarrollo del sistema utilizará las siguientes librerías:

- class-transformer
- class-validator
- dotenv
- express
- express-rate-limit
- jose
- mongodb
- nodemon
- reflect-metadata
- typescript
