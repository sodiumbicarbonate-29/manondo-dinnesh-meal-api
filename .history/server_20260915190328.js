const express = require('express')
const app = express()
const PORT = 3000

const meals = [
    {
        id: 1,
        name: "Bicol Express",
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
        price: "₱40.00"
    }
]

app.get('/api/meals', (req, res) => {
    res.json(meals)
})

app.get('/api/meals/:id', (req, res) => {
    const id = Number(req.params.id)
    const meal = meals.find(meal => meal.id === id)

    if (!meal) {
        return res.status(404).json({ error: true, 
            message: "Meal not found" })
    }

    res.json(meal)
});

app.use(express.static(__dirname))
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
