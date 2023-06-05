//creacion de base de datos
use ('sample_BeautyDB');


//Creacion de coleccion de usuarios


// validacion de datos (esquema de campos)

db.createCollection("usuarios",{
    validator: {
        $jsonSchema: {
        required: ["id_usuario", "correo", "nombre", "apellido", "contraseña", "id_rol", "estado"],
        properties: {
            id_usuario: {
                bsonType: "int",
                description: "Identificador único del usuario",
            },
            correo: {
                bsonType: "string",
                description: "Correo electrónico del usuario",
                pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
            },
            nombre: {
                bsonType: "string",
                description: "Nombre del usuario",
            },
            apellido: {
                bsonType: "string",
                description: "Apellido del usuario",
                        },
            contraseña: {
                bsonType: "string",
                description: "Contraseña del usuario",
            },
            id_rol: {
                bsonType: "int",
                description: "Identificador único del rol asignado al usuario",
            },
            estado: {
                bsonType: "string",
                description: "Estado del usuario (activo o inactivo)",
            }
        }
    }
    }
})
