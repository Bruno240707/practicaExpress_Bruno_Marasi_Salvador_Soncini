import express from "express";

const app = express()
const port = 3000

app.use(express.json())

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

const personas = [
    { "nombre": "Juan",
      "edad": 25,
      "ciudad": "Buenos Aires" },
    { "nombre": "Pedro",
      "edad": 30,
      "ciudad": "Córdoba" },
    { "nombre": "María",
      "edad": 28,
      "ciudad": "Rosario" },
    { "nombre": "Ana",
      "edad": 22,
      "ciudad": "Mendoza" }
  ];

const productos = ["Mouse", "Teclado", "Monitor"]

app.get('/personas', (req, res) => {
    res.send(personas)
})

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


app.post('/personas', (req, res) => {
    const persona = req.body;
    if (!persona) return res.status(400).json({ error: 'Faltan datos de la persona' });
  
    personas.push(persona);
    res.status(201).json({ mensaje: 'Persona agregada', personas });
})

app.delete('/personas/:indice', (req, res) => {
    const indice = parseInt(req.params.indice);
  
    if (isNaN(indice) || !personas[indice]) {
      return res.status(404).json({ error: 'Índice no válido' });
    }
  
    const eliminado = personas.splice(indice, 1);
    res.json({ mensaje: `Persona eliminada: ${eliminado[0].nombre}`, personas });
  })

app.listen(port, () => { 
    console.log(`Listening on http://localhost:${port}`)
})


