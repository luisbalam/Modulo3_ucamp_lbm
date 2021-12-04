//instanciamos mongoose
const mongoose= require('mongoose');

// conexion con la base de datos
mongoose.connect('mongodb://localhost:27017/m3');//base es el nombre de BD en Mongo, se crea automáticamente
//el 27017 es el puerto donde por default funciona Mongo.

//crear un modelo
const User = mongoose.model('User',{
    firstname: String,
    lastname: String,
}, 'user'); //users es el nombre de la coleccion que se crea en la BD, sino se pone pone una al azar

//instanciamos un objeto del modelo
const ramon= new User({  
    firstname: 'Luis',
    lastname: 'Balam',
})

ramon.save().then(()=> console.log('Se guardó el elemento'));
