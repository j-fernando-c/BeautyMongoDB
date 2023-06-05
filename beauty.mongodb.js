//importacion de librerias

const uri = "mongodb+srv://fernando:1001@cluster0.xypm0bq.mongodb.net/?retryWrites=true&w=majority";

const { MongoClient } = require("mongodb");
const { faker } = require('@faker-js/faker');
const client = new MongoClient(uri);



//creacion de base de datos



//Creacion de coleccion de usuarios
// db.createCollection("usuarios");


// validacion de datos (esquema de campos)

// db.runCommand({
//     collMod: "usuarios",
//     validator: {
//        $jsonSchema: {
//           bsonType: "object",
//           required: ["id_usuario", "correo", "nombre", "apellido", "contraseña", "id_rol", "estado"],
//           properties: {
//              id_usuario: {
//                 bsonType: "int",
//                 description: "Identificador único del usuario",
//                 minimum: 1,
//                 maximum: 100,
//                 exclusiveMaximum: true
//              },
//              correo: {
//                 bsonType: "string",
//                 description: "Correo electrónico del usuario",
//                 pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
//              },
//              nombre: {
//                 bsonType: "string",
//                 description: "Nombre del usuario",
//                 minLength: 1,
//                 maxLength: 50
//              },
//              apellido: {
//                 bsonType: "string",
//                 description: "Apellido del usuario",
//                 minLength: 1,
//                 maxLength: 50
//              },
//              contraseña: {
//                 bsonType: "string",
//                 description: "Contraseña del usuario",
//                 minLength: 6
//              },
//              id_rol: {
//                 bsonType: "int",
//                 description: "Identificador único del rol asignado al usuario",
//                 enum: [1, 2, 3]
//              },
//              estado: {
//                 bsonType: "string",
//                 description: "Estado del usuario (activo o inactivo)",
//                 enum: ["activo", "inactivo"]
//              }
//           }
//        }
//     }
//  })



// ------------------------Roles-----------------

//creacion de esquema de rol

// use("sample_Beauty");

// db.createCollection("roles",{
//     validator:{
//         $jsonSchema:{
//             bsonType: "object",
//             required: ["nombre","estado","id_rol"],
//             properties:{
//                 nombre:{
//                     bsonType: "string",
//                     description: "el nombre debe ser tipo string"
//                 },
//                 estado:{
//                     bsonType: "bool",
//                     description: "el estado debe ser booleano"
//                 },
//                 id_rol:{
//                     bsonType: "int",
//                     description: "solo enteros"
//                 }
//             }
//         }
//     }
// })

// const agregarDocumento = async (documento) => {
//   const client = new MongoClient(uri)
//   try {
//       await client.connect();
//       const result = await client.db("sample_BeautyDB").collection("roles").insertMany(documento)
//       console.log(result);
//       console.log(`Se creo una nueva propiedad con el siguiente id: ${result.insertedId}`);
//   } catch (error) {
//       console.error(error)
//   } finally {
//       await client.close()
//   }
// }

// creacion de esquema de permisos

// db.createCollection("permisos",{
//   validator:{
//       $jsonSchema:{
//           bsonType: "object",
//           required: ["nombre","estado"],
//           properties:{
//               nombre:{
//                   bsonType: "string",
//                   description: "el nombre debe ser tipo string"
//               },
//               estado:{
//                   bsonType: "bool",
//                   description: "el estado debe ser booleano"
//               }
//           }
//       }
//   }
// })

//ingresando datos de permisos

// const agregarDocumento = async (documento) => {
//     const client = new MongoClient(uri)
//     try {
//         await client.connect()
//         const result = await client.db("psbarber").collection("permisos").insertMany(documento)
//         console.log(result);
//         console.log(`Se creo una nueva propiedad con el siguiente id: ${result.insertedId}`);
//     } catch (error) {
//         console.error(error);
//     } finally {
//         await client.close()
//     }

// }

// for (let i = 0; i < 200; i++) {
//     agregarDocumento([
//         {
//             "nombre": faker.internet.userName(),
//             "estado": faker.datatype.boolean()
//         },
//         {
//             "nombre": faker.internet.userName(),
//             "estado": faker.datatype.boolean()
//         },
//         {
//             "nombre": faker.internet.userName(),
//             "estado": faker.datatype.boolean()
//         }
//     ])
// }
