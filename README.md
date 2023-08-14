## Zoologico Campus 

![](https://raw.githubusercontent.com/Nirclaw/zoologico_campus/main/img/08-12-19-Las-5-de-El-Rey-Le%C3%B3n-1.jpg)

**1. Diversidad de Experiencias:** En nuestro establecimiento, no solo podrás disfrutar de la emocionante exhibición de diversas especies de animales en hábitats naturales, sino que también te sumergirás en el intrigante mundo de la arqueología. Nuestro objetivo es ofrecer una experiencia educativa única y diversa.

**2. Exhibiciones de Arqueología:** Además de las exhibiciones de animales, presentamos una sección dedicada a la arqueología. Aquí, podrás explorar artefactos históricos, aprender sobre civilizaciones antiguas y descubrir la riqueza cultural que ha dado forma a nuestra historia.

**3. Conexión Histórica:** Creemos en la conexión entre la vida silvestre y la historia humana. A través de la arqueología, puedes entender cómo las sociedades antiguas interactuaban con su entorno natural y cómo esto influyó en la evolución de las comunidades y el mundo animal.

**4. Educación Integral:** Nuestro compromiso educativo abarca tanto la biología como la historia. Ofrecemos programas educativos que abordan tanto la conservación de la biodiversidad como la importancia de preservar el patrimonio cultural. Queremos fomentar una apreciación holística de nuestro mundo.

**5. Investigación Multidisciplinaria:** Nuestro centro promueve la investigación en campos diversos, desde la biología hasta la arqueología. Colaboramos con expertos en ambas áreas para enriquecer nuestro entendimiento de la vida en todas sus formas.

**6. Celebrando la Diversidad:** Al igual que resaltamos la diversidad de especies en el reino animal, también celebramos la diversidad cultural y la historia de la humanidad. Las exhibiciones arqueológicas resaltan la belleza y singularidad de las diferentes culturas a lo largo del tiempo.

**7. Sensibilización y Cuidado:** Parte de nuestro propósito es sensibilizar sobre la importancia de conservar tanto la vida animal como el patrimonio histórico. Promovemos la concienciación sobre la preservación de la biodiversidad y la herencia cultural para las generaciones presentes y futuras.

**8. Inspiración Continua:** Esperamos que tu visita a nuestro Zoo y Centro de Arqueología sea una fuente de inspiración y aprendizaje constante. Queremos estimular la curiosidad y el respeto por la naturaleza y la historia, alentándote a explorar más allá de lo evidente.

Disfruta de una experiencia enriquecedora y emocionante mientras te sumerges en el mundo de la vida animal y la historia humana en un solo lugar. ¡Te damos la bienvenida a un viaje único de descubrimiento!

![](https://raw.githubusercontent.com/Nirclaw/zoologico_campus/main/img/Screenshot_from_2023-08-09_07-52-20.png)

## Objetivos y Alcances

Este proyecto tiene como objetivo desarrollar un sistema de gestión para un zoológico, que permitirá el registro y seguimiento de usuarios, animales, empleados, insumos y zonas del zoológico. El sistema se basará en una base de datos MongoDB y seguirá las mejores prácticas de desarrollo, incluyendo el uso de patrones DTO (Data Transfer Object), límites de peticiones por minuto, validación de entrada con JWT provisional y manejo de errores personalizados. A continuación, se detallan los aspectos clave del sistema:

### Registro de Usuarios

- Búsqueda de usuarios por cédula y nombre.
- Listado de todos los usuarios.
- Registro de nuevos usuarios.
- Actualización de información de usuarios existentes.
- Eliminación de usuarios por ID.

### Registro de Animales

- Búsqueda de animales por clasificación basada en alimentación (hervívoro, carnívoro, omnívoro).
- Búsqueda de animales por clasificación basada en su hábitat (terrestres, acuáticos, aéreos).
- Búsqueda de animales por nombre.
- Listado de todos los animales existentes.
- Registro de nuevos animales.
- Actualización de información de animales existentes.
- Eliminación de animales por ID.

### Registro de Empleados

- Búsqueda de empleados por cédula, nombre y cargo.
- Listado de todos los empleados.
- Registro de nuevos empleados.
- Actualización de información de empleados existentes.
- Eliminación de empleados por ID.

### Registro de Insumos

- Búsqueda de insumos por nombre.
- Listado de todos los insumos.
- Registro de nuevos insumos.
- Actualización de información de insumos existentes.
- Eliminación de insumos por ID.

### Registro de Zonas del Zoológico

- Búsqueda de zonas por nombre.
- Listado de todas las zonas.
- Registro de nuevas zonas.
- Actualización de información de zonas existentes.
- Eliminación de zonas por ID.

### Librerías Utilizadas

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

El sistema será desarrollado en TypeScript y seguirá una estructura de código organizada y mantenible. Se implementarán las funcionalidades requeridas, incluyendo la validación de entrada, el manejo de JWT provisional y la gestión de errores personalizados. Además, se aplicarán las buenas prácticas de desarrollo y seguridad para garantizar el correcto funcionamiento del sistema de gestión del zoológico.