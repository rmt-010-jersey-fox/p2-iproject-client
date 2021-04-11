const express = require('express')
const router = express.Router()
const MealController = require('../controllers/mealsController')
const DrinksController = require('../controllers/drinksController')
const DrinkController = require('../controllers/drinksController')


router.get('/meals/random', MealController.randomMeal)
router.get('/drinks/random', DrinkController.randomDrink)


module.exports = router