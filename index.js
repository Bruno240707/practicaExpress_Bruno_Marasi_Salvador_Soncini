import express from "express";

const app = express()
const port = 3000

const usuario = {
    nombre: "Ana",
    edad: "42"
}
const materias = [
    {
    nombre: "Matematica"
    },
    {
    nombre: "Lengua"
    }
]
const productos = ["Mouse", "Teclado", "Monitor"]

app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor');
})

app.get('/saludo', (req, res) => {
    res.send('Hello World!');
})

app.get('/numero', (req, res) => {
    res.send('42');
})

app.get('/usuario', (req, res) => {
    res.send(usuario);
})

app.get('/productos', (req, res) => {
    res.send(productos);
})

app.get('/materias', (req, res) => {
    res.send(materias);
})

app.listen(port, () => { 
    console.log(`Listening on http://localhost:${port}`)
})


