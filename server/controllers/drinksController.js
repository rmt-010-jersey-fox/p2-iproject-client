const axios = require('axios')

class DrinkController{

    static randomDrink (req, res, next){
        axios({
            method: 'post',
            url: `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
        })
            .then(response => {
                let data = response.data.drinks[0]
                console.log(data);
                let id = data.idDrink
                let name = data.strDrink
                let category = data.strCategory
                let alcoholic = data.strAlcoholic
                let instructions = data.strInstructions
                let imgUrl = data.strDrinkThumb
                let ingridientsRaw = [ data.strIngredient1,  data.strIngredient2,  data.strIngredient3,  data.strIngredient4,  data.strIngredient5,  data.strIngredient6,  data.strIngredient7,  data.strIngredient8,  data.strIngredient9, data.strIngredient10, data.strIngredient11, data.strIngredient12, data.strIngredient13, data.strIngredient14, data.strIngredient15, data.strIngredient16, data.strIngredient17, data.strIngredient18, data.strIngredient19, data.strIngredient20]
                let ingridients = []

                ingridientsRaw.forEach(el => {
                    if (el){
                        ingridients.push(el)
                    }
                })
                
                res.status(200).json({id, name, category, alcoholic, instructions, imgUrl, ingridients})
            })
            .catch(err => {
                console.log('error');
            })
    }
}

module.exports = DrinkController