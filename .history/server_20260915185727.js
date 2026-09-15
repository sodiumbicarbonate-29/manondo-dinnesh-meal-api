const express = require('express')
const app = express()
const PORT = 3000

const students = [
    {
        id: 1,
        name: "Gran Sabandal",
        course: "BSIT"
    },
    {
        id: 2,
        name: "Cris Ray Belarmino",
        course: "BSIT"
    },
    {
        id: 3,
        name: "Patrick Elalto",
        course: "BSIT"
    }
]

app.get('/api/students', (req, res) => {
    res.json(students)
})

app.get('/api/students/:id', (req, res) => {
    const id = Number(req.params.id)
    const student = students.find(student => 
        student.id === id)

    if (!student) {
        return res.status(404).json({ error: true, message: "Student not found" })
    }

    res.json(student)
});

app.use(express.static(__dirname))
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})

