//instanciamos mongoose
const mongoose= require('mongoose');

// conexion con la base de datos
mongoose.connect('mongodb://localhost:27017/base');//base es el nombre de BD en Mongo, se crea automáticamente
//el 27017 es el puerto donde por default funciona Mongo.

//crear un modelo
const User = mongoose.model('User',{
    firstname: String,
    lastname: String,
}, 'users'); //users es el nombre de la coleccion que se crea en la BD

//instanciamos un objeto del modelo
const ramon= new User({  
    firstname: 'Luis',
    lastname: 'Balam',
})

ramon.save().then(()=> console.log('Se guardó el elemento'));
