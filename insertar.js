const {faker} = require('@faker-js/faker');
const {MongoClient } = require('mongodb');

const uri = "mongodb+srv://fernando:1001@cluster0.xypm0bq.mongodb.net/?retryWrites=true&w=majority";

// async function createSampleData(nuevaPropiedad) {
// const client = new MongoClient(uri)
//       try {
//         await client.connect();
    
//         const result = await client.db('sample_BeautyDB').collection('usuarios').insertMany(nuevaPropiedad);
//         console.log(`êl resultado es ${result.insertId}`)
//       }catch(e){
//         console.error(e)

//       }finally{
//         await client.close()
//       }
//     }

//     for(let i = 0; i<100; i++){
//         createSampleData([
//           {
//             "id_usuario": faker.number.int({min: 1, max: 10}),
//             "correo": faker.internet.email(),
//             "nombre": faker.person.firstName(),
//             "apellido": faker.person.lastName(),
//             "contraseña": faker.internet.password(),
//             "id_rol": faker.number.int({min: 1, max: 3}),
//             "estado": "activo"
          // },          {
          //   "id_usuario": faker.number.int({min: 1, max: 10}),
          //   "correo": faker.internet.email(),
          //   "nombre": faker.person.firstName(),
          //   "apellido": faker.person.lastName(),
          //   "contraseña": faker.internet.password(),
          //   "id_rol": faker.number.int({min: 1, max: 3}),
          //   "estado": "activo"
          // },
          // {
          //   "id_usuario": faker.number.int({min: 1, max: 10}),
          //   "correo": faker.internet.email(),
          //   "nombre": faker.person.firstName(),
          //   "apellido": faker.person.lastName(),
          //   "contraseña": faker.internet.password(),
          //   "id_rol": faker.number.int({min: 1, max: 3}),
          //   "estado": "activo"
          // },
          // {
          //   "id_usuario": faker.number.int({min: 1, max: 10}),
          //   "correo": faker.internet.email(),
          //   "nombre": faker.person.firstName(),
          //   "apellido": faker.person.lastName(),
          //   "contraseña": faker.internet.password(),
          //   "id_rol": faker.number.int({min: 1, max: 3}),
          //   "estado": "activo"
          // },
          // {
          //   "id_usuario": faker.number.int({min: 1, max: 10}),
          //   "correo": faker.internet.email(),
          //   "nombre": faker.person.firstName(),
          //   "apellido": faker.person.lastName(),
          //   "contraseña": faker.internet.password(),
          //   "id_rol": faker.number.int({min: 1, max: 3}),
          //   "estado": "activo"
          // },
          // {
          //   "id_usuario": faker.number.int({min: 1, max: 10}),
          //   "correo": faker.internet.email(),
          //   "nombre": faker.person.firstName(),
          //   "apellido": faker.person.lastName(),
          //   "contraseña": faker.internet.password(),
          //   "id_rol": faker.number.int({min: 1, max: 3}),
          //   "estado": "activo"
          // },
          // {
          //   "id_usuario": faker.number.int({min: 1, max: 10}),
          //   "correo": faker.internet.email(),
          //   "nombre": faker.person.firstName(),
          //   "apellido": faker.person.lastName(),
          //   "contraseña": faker.internet.password(),
          //   "id_rol": faker.number.int({min: 1, max: 3}),
          //   "estado": "activo"
          // },
          // {
          //   "id_usuario": faker.number.int({min: 1, max: 10}),
          //   "correo": faker.internet.email(),
          //   "nombre": faker.person.firstName(),
          //   "apellido": faker.person.lastName(),
          //   "contraseña": faker.internet.password(),
          //   "id_rol": faker.number.int({min: 1, max: 3}),
          //   "estado": "activo"
          // },
          // {
          //   "id_usuario": faker.number.int({min: 1, max: 10}),
          //   "correo": faker.internet.email(),
          //   "nombre": faker.person.firstName(),
          //   "apellido": faker.person.lastName(),
          //   "contraseña": faker.internet.password(),
          //   "id_rol": faker.number.int({min: 1, max: 3}),
          //   "estado": "activo"
          // },
          // {
          //   "id_usuario": faker.number.int({min: 1, max: 10}),
          //   "correo": faker.internet.email(),
          //   "nombre": faker.person.firstName(),
          //   "apellido": faker.person.lastName(),
          //   "contraseña": faker.internet.password(),
          //   "id_rol": faker.number.int({min: 1, max: 3}),
          //   "estado": "activo"
    //       }
    //       ]
    //     )
    // }




    // Permisos



// async function createSampleData(nuevaPropiedad) {
// const client = new MongoClient(uri)
//       try {
//         await client.connect();
    
//         const result = await client.db('sample_BeautyDB').collection('permisos').insertMany(nuevaPropiedad);
//         console.log(`êl resultado es ${result.insertId}`)
//       }catch(e){
//         console.error(e)

//       }finally{
//         await client.close()
//       }
//     }

//     for(let i = 0; i<100; i++){
//         createSampleData([
//           {
//             "id_permiso": faker.number.int({min: 1, max: 10}),
//             "estado": faker.datatype.boolean()
//           },{
//             "id_permiso": faker.number.int({min: 1, max: 10}),
//             "estado": faker.datatype.boolean()
//           },{
//             "id_permiso": faker.number.int({min: 1, max: 10}),
//             "estado": faker.datatype.boolean()
//           },{
//             "id_permiso": faker.number.int({min: 1, max: 10}),
//             "estado": faker.datatype.boolean()
//           },{
//             "id_permiso": faker.number.int({min: 1, max: 10}),
//             "estado": faker.datatype.boolean()
//           },{
//             "id_permiso": faker.number.int({min: 1, max: 10}),
//             "estado": faker.datatype.boolean()
//           },{
//             "id_permiso": faker.number.int({min: 1, max: 10}),
//             "estado": faker.datatype.boolean()
//           },{
//             "id_permiso": faker.number.int({min: 1, max: 10}),
//             "estado": faker.datatype.boolean()
//           },{
//             "id_permiso": faker.number.int({min: 1, max: 10}),
//             "estado": faker.datatype.boolean()
//           },{
//             "id_permiso": faker.number.int({min: 1, max: 10}),
//             "estado": faker.datatype.boolean()
//           }
//           ]
//         )
//     }


// Roles   


// async function createSampleData(nuevaPropiedad) {
  // const client = new MongoClient(uri)
  //       try {
  //         await client.connect();
      
  //         const result = await client.db('sample_BeautyDB').collection('permisos').insertMany(nuevaPropiedad);
  //         console.log(`êl resultado es ${result.insertId}`)
  //       }catch(e){
  //         console.error(e)
  
  //       }finally{
  //         await client.close()
  //       }
  //     }
  
  //     for(let i = 0; i<100; i++){
  //         createSampleData([
  //           {
  //             "id_permiso": faker.number.int({min: 1, max: 10}),
  //             "estado": faker.datatype.boolean()
  //           },{
  //             "id_permiso": faker.number.int({min: 1, max: 10}),
  //             "estado": faker.datatype.boolean()
  //           },{
  //             "id_permiso": faker.number.int({min: 1, max: 10}),
  //             "estado": faker.datatype.boolean()
  //           },{
  //             "id_permiso": faker.number.int({min: 1, max: 10}),
  //             "estado": faker.datatype.boolean()
  //           },{
  //             "id_permiso": faker.number.int({min: 1, max: 10}),
  //             "estado": faker.datatype.boolean()
  //           },{
  //             "id_permiso": faker.number.int({min: 1, max: 10}),
  //             "estado": faker.datatype.boolean()
  //           },{
  //             "id_permiso": faker.number.int({min: 1, max: 10}),
  //             "estado": faker.datatype.boolean()
  //           },{
  //             "id_permiso": faker.number.int({min: 1, max: 10}),
  //             "estado": faker.datatype.boolean()
  //           },{
  //             "id_permiso": faker.number.int({min: 1, max: 10}),
  //             "estado": faker.datatype.boolean()
  //           },{
  //             "id_permiso": faker.number.int({min: 1, max: 10}),
  //             "estado": faker.datatype.boolean()
  //           }
  //           ]
  //         )
  //     }

