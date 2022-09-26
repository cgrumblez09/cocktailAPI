//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('#search').addEventListener('click', searchCocktail);

function showDrink(drinkInfo){
    document.querySelector('h2').innerText = data.drinks[i]
}
function searchCocktail(){
        let drink = document.querySelector('input').value.toLocaleLowerCase()

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)

    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)
      // console.log(data)
        
      for(let i = 0; i < data.drinks.length; i++){
        // console.log(data.drinks[i].strDrink)
        // console.log(data.drinks[i].strInstructions)
        // console.log(Object.keys(data.drinks[i]))
        document.querySelector('h2').innerText = data.drinks[i].strDrink
        document.querySelector('h3').innerHTML = data.drinks[i].strInstructions
        document.querySelector('img').src = data.drinks[i].strDrinkThumb
        // const newUl = document.querySelector('ul')
        // const li = newUl.appendChild(document.createElement('li'))
        // li.textContent = 
        // if(Object.keys(data.drinks[i])){
        //   console.log(data.drinks[i])
        // }
      } 
    //   document.querySelector('img').src = data.drinks[0].strDrinkThumb
    //   document.querySelector('h3').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
