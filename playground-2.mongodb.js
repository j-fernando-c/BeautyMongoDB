//creacion de base de datos
use ('sample_BeautyDB');


//Creacion de coleccion de usuarios


// validacion de datos (esquema de campos)

// db.createCollection("usuarios",{
//     validator: {
//         $jsonSchema: {
//         required: ["id_usuario", "correo", "nombre", "apellido", "contraseña", "id_rol", "estado"],
//         properties: {
//             id_usuario: {
//                 bsonType: "int",
//                 description: "Identificador único del usuario",
//             },
//             correo: {
//                 bsonType: "string",
//                 description: "Correo electrónico del usuario",
//                 pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
//             },
//             nombre: {
//                 bsonType: "string",
//                 description: "Nombre del usuario",
//             },
//             apellido: {
//                 bsonType: "string",
//                 description: "Apellido del usuario",
//                         },
//             contraseña: {
//                 bsonType: "string",
//                 description: "Contraseña del usuario",
//             },
//             id_rol: {
//                 bsonType: "int",
//                 description: "Identificador único del rol asignado al usuario",
//             },
//             estado: {
//                 bsonType: "string",
//                 description: "Estado del usuario (activo o inactivo)",
//             }
//         }
//     }
//     }
// })



// creacion de esquema de permisos

// db.createCollection("permisos",{
//   validator:{
//       $jsonSchema:{
//           bsonType: "object",
//           required: ["id_permiso","estado"],
//           properties:{
//               id_permiso:{
//                   bsonType: "int",
//                   description: "el id debe ser tipo int"
//               },
//               estado:{
//                   bsonType: "bool",
//                   description: "el estado debe ser booleano"
//               }
//           }
//       }
//   }
// })

// Creacion de esquema Rol  



// db.createCollection("roles",{
//         validator:{
//             $jsonSchema:{
//                 bsonType: "object",
//                 required: ["id_rol","estado",],
//                 properties:{
//                     estado:{
//                         bsonType: "bool",
//                         description: "el estado debe ser booleano"
//                     },
//                     id_rol:{
//                         bsonType: "int",
//                         description: "solo enteros"
//                     }
//                 }
//             }
//         }
//     })



// operaciones CRUD


//ingresar un dato a un documento

// db.usuarios.insertOne({
//   id_usuario: 1,
//   correo: 'pedro@example.com',
//   nombre: 'John',
//   apellido: 'Doe',
//   contraseña: '123',
//   id_rol: 1,
//   estado: 'activo'
// });

//buscar usuarios activos

// const usuarios = db.usuarios.find({ estado: 'activo' });
// usuarios.forEach(usuario => {
//   printjson(usuario);
// });

//buscar usuarios con findOne

// const usuario = db.usuarios.findOne({ id_usuario: 1 });
// printjson(usuario);


//actualizar un usuario

// db.usuarios.updateOne(
//   { id_usuario: 1 },
//   { $set: { estado: 'inactivo' } }
// );


// eliminar un usuario

// db.usuarios.deleteOne({ id_usuario: 1 });

//eliminar varios documentos

// db.usuarios.deleteMany({ estado: 'inactivo' });

// eliminar una colleccion 


// db.usuarios.drop();

//conectar una llave foranea (lookup)


// const result = db.usuarios.aggregate([
//   {
//     $lookup: {
//       from: 'roles',
//       localField: 'id_rol',
//       foreignField: 'id_rol',
//       as: 'rol'
//     }
//   }
// ]);
// result.forEach(document => {
//   printjson(document);
// });


//pipelines

// const result = db.usuarios.aggregate([
//     { $match: { estado: 'activo' } },
//     { $sort: { nombre: 1 } },
//     { $limit: 5 }
//   ]);
//   result.forEach(document => {
//     printjson(document);
//   });