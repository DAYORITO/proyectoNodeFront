const express = require('express')//Importa el modulo para crear aplicaciones web
const app = express() // Se crea una instancia de express
const puerto = 8085 //Puerto
const path = require('path') //Importa el mudulo path que permite trabajar con rutas y directorios
const hbs = require('hbs')//Motor de plantillas

app.use(express.static('PUBLIC'))   

app.set('views', path.join(__dirname+'/PUBLIC/VISTAS'))//direccion de las vistas
app.set('view engine', 'hbs')//Motor de p<lantillas


//Esta es la respuesta que se le muestra al cliente
app.get('/', (req, res)=>{
    res.render ('login')//render muestra un formato legible al cliente
})
app.get('/usuarios', (req, res)=>{
    res.render('usuarios')
})
app.get('/roles', (req, res)=>{
    res.render('roles')
})

app.get('/vigilantes', (req, res)=>{
    res.render('vigilantes')
})
app.get('/cuenta', (req, res) => {
    res.render('cuentascobros')
})
app.get('/cuentaI', (req, res) => {
    res.render('cuentas_index')
})
app.get('/propietarios', (req, res) => {
    res.render('propietarios')
})

app.get('/residentes', (req, res) => {
    res.render('residentes')
})

app.get('/visitantes', (req, res) => {
    res.render('visitantes')
})
app.get('/cobros', (req, res) => {
    res.render('cobros_index')
})
app.get('/espacios', (req, res) => {
    res.render('espacios')
})

app.get('/visitas', (req, res) => {
    res.render('visitas')
})
app.get('/reservas', (req, res)=>{
    res.render('reservas_index')
})



app.listen(puerto, () => {
    console.log(`Escuchando por el puerto ${puerto}`)
})

console.log("soy front");

