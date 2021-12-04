require('dotenv').config()

//1. instanciar express
const express= require('express');

//2. iniciar express
const app = express();

//3. agregar middlewares
app.use(express.json()); //le indica que nuestras peticiones van a poder recibir json dentro del body

//4. definir las rutas
app.post('/',(req, res)=>{
    res.json(
        mensaje= 'se agregó el elemento'
    )
});

app.get('/', (req, res)=>{
 res.json({
    mensaje: 'se obtuvo el elemento'
 })
});


app.put('/',(req, res)=>{
    res.json({
        mensaje: 'se actualizó el elemento'
     })
});

app.delete('/', (req, res)=>{
    res.json({
        mensaje: 'se eliminó el elemento'
     })
});

//5. iniciar servidor 
app.listen(process.env.PORT, ()=>{
    console.log('se inicio el servidor en el puerto '+ process.env.PORT);
})
