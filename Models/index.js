const User=require('./User.model'); //importamos el modelo, esto se haría para 
//todos los modelos que se tengan en la carpeta Models, facilita cuando se importan en otro lado
const User=require('./Post.model')

module.exports = {
    User,
    Post
}