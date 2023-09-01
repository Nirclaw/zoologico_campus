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





# INSTALACIÓN

**1**. Asegurate de tener Node.js instalado en tu computadora. De no ser así, descargalo e instala [Node js](https://nodejs.org/es/download)

**2**. Clona este repositorio en tu computadora, utiliza el siguiente comando:

```
git clone https://github.com/Nirclaw/zoologico_campus.git
```

**3**. Instala las dependecias necesarias con el siguiente comando.

```
  npm install
```

**4**. Configura tus variables de entorno

- Crea un archivo .env en la carpeta principal del proyecto y pon las siguientes variables.

```
ALTAS_USUARIO="Nirclaw"
ATLAS_PASS="EDTXMFUhkURsfs7g"
ATLAS_DB="mongo_zoo"
SERVER = {"hostname":"127.10.10.10", "port":5100}
PASSWORD = ""
```

**5**. ejecuta el proyecto en la terminal

```
npm run dev
```





# 🥷LOGIN

- Los empleados deberán **iniciar sesión** para poder utilizar los endpoints relacionados al manejos y gestión interno del zoológico.

- El administrador se encarga de registrar al empleado y de darle los permisos pertinentes para poder realizar sus tareas en el aplicativo.

  - 1. Dependiendo del cargo, los empleados van a poder realizar diferentes funciones 

       1. En esta app solo hay 2 roles: 

          ```
          {
          	"administrador"
          	"usuario"
          }
          ```



### TIPOS DE USUARIOS

```json
{
    "user": "admin",
    "password": "123456789"
}
{
    "user": "empleado",
    "password": "987654321"
}
```



- ##### REGISTRO DE EMPLEADOS

![login](./img/Login.gif)

- **Aviso**:  Tenga en cuenta que el tiempo de validez de su inicio de sesión es de solo **3 horas**. Cuando expire, deberá realizar un nuevo inicio de sesión siguiendo las indicaciones detalladas en el video.

  - Nombre "string"


# ENDPOINTS



#### METODO GET

![Metodo GET](./img/Get.gif)



#### METODO POST

![Metodo POST](./img/Post.gif)



#### METODO PUT 

![Metodo PUT](./img/Put.gif)



#### METODO DELETE

![Metodo DELETE](./img/Delete.gif)



#### COLECCIONES PRESENTES

![Colecciones](./img/Colecciones.jpeg)

#### DESCRIPCIÓN DE LAS COLECCIONES 



- ##### REGISTRO DE TICKETS





## CONSULTAS 

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

  

##### REGISTRO DE TAQUILLA

- Búsqueda de ticket por cédula.
- Búsqueda de ticket por id.
- Listado de todos los tickets.





## COLECCIONES

### ANMALES

###### GET: 

- Listado de todos los animales existentes.
  - `http://127.10.10.10:5100/animales`

- Búsqueda de animales por nombre.
  - `http://127.10.10.10:5100/animales/name/Tigre`
- Búsqueda de animales por clasificación basada en alimentación (herbívoro, carnívoro, omnívoro).
  - `http://127.10.10.10:5100/animales/food/carne`
- Búsqueda de animales por clasificación basada en su hábitat (terrestres, acuáticos, aéreos).

  db.animales.find()

​	Para eliminar el registro de una zona tiene que especificar el ID por el header.

- `http://127.10.10.10:5100/zonas/1`



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

`EMAIL:` [caicedonicolas150@gmail.com](mailto:caicedonicolas150@gmail.com)