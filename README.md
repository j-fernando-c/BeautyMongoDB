

# Creación de una Base de Datos con 3 Colecciones

Este es un ejemplo de cómo crear una base de datos en MongoDB con tres colecciones utilizando MongoDB. A continuación, se muestra un paso a paso de cómo puedes realizar esta tarea.

## Requisitos

- MongoDB instalado en tu sistema.
- Conocimientos básicos sobre MongoDB.

## Pasos

1. Inicia tu servidor de MongoDB local.

2. Abre una terminal o un intérprete de comandos y accede al shell de MongoDB ejecutando el siguiente comando:

   ```
   mongo
   ```

3. Crea una nueva base de datos ejecutando el siguiente comando en el shell:

   ```
   use mi_base_de_datos
   ```

   Reemplaza `mi_base_de_datos` con el nombre que desees darle a tu base de datos.

4. Crea la primera colección ejecutando el siguiente comando:

   ```javascript
   db.createCollection("usuarios")
   ```

   Esto creará una colección llamada "usuarios" en tu base de datos.

5. Repite el paso anterior para crear las dos colecciones restantes. Por ejemplo:

   ```javascript
   db.createCollection("productos")
   db.createCollection("pedidos")
   ```

   Esto creará las colecciones "productos" y "pedidos" en tu base de datos.

6. ¡Listo! Ahora tienes una base de datos con tres colecciones creadas en MongoDB.

## Uso de las Colecciones

Una vez que hayas creado las colecciones, puedes utilizarlas para almacenar y manipular datos. Puedes realizar operaciones como inserción, consulta, actualización y eliminación de documentos en cada una de las colecciones.

Por ejemplo, para insertar un documento en la colección "usuarios", puedes ejecutar el siguiente comando:

```javascript
db.usuarios.insertOne({ nombre: "John", apellido: "Doe", edad: 30 })
```

Esto insertará un documento con los campos "nombre", "apellido" y "edad" en la colección "usuarios".

Puedes explorar más sobre cómo utilizar las colecciones y realizar diferentes operaciones utilizando el shell de MongoDB en la [documentación oficial de MongoDB](https://docs.mongodb.com/manual/).

## Notas

- Recuerda que los nombres de las colecciones y los documentos son solo ejemplos. Puedes utilizar los nombres que mejor se adapten a tu caso de uso.
- Ten en cuenta que estos pasos asumen que tienes MongoDB instalado y configurado correctamente en tu sistema. Si encuentras algún problema, consulta la documentación de MongoDB o busca ayuda en la comunidad de MongoDB.

Espero que este ejemplo de README te sea útil para crear una base de datos con tres colecciones en MongoDB. Recuerda personalizarlo y adaptarlo a tus necesidades específicas. ¡Buena suerte con tu proyecto!