const express = require('express')
const app = express()
const PORT = 3000

const students = [
    {
        id: 1,
        name: "Bicol Exress",
        price: "₱60.00"
    },
    {
        id: 2,
        name: "Pinakbet",
        price: "₱45.00"
    },
    {
        id: 3,
        name: "Pancit",
        price: "40"
    }
]

app.get('/api/menu', (req, res) => {
    res.json(students)
})

app.get('/api/menu:id', (req, res) => {
    const id = Number(req.params.id)
    const menus = menus.find(menu => 
        menu.id === id)

    if (!menu) {
        return res.status(404).json({ error: true, 
            message: "Menu not found" })
    }

    res.json(menu)
});

app.use(express.static(__dirname))
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})

