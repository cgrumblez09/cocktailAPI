//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('#search').addEventListener('click', searchCocktail);
document.querySelector('#forward').addEventListener('click', nextCocktail)
document.querySelector('#backward').addEventListener('click', prevCocktail)

let drinkArr = [];
let count = 0;
console.log(count)
// function showDrink(drinkInfo){
//     document.querySelector('h2').innerText = data.drinks[i]
// }
function searchCocktail(){
        let drink = document.querySelector('input').value.toLowerCase().trim();
        let li = document.getElementsByTagName('li')
          while(li.length > 0){
            li[0].remove();
        }
    document.querySelector('#forward').style.display = 'inline';
    document.querySelector('#backward').style.display = 'inline';

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)

    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)
      console.log(count)

          document.querySelector('h2').innerText = data.drinks[count].strDrink
          document.querySelector('h3').innerHTML = data.drinks[count].strInstructions
          document.querySelector('img').src = data.drinks[count].strDrinkThumb
      
      // document.querySelector('ul').innerHTML = '';  THIS WILL REMOVE ALL CODE IN THE UL
      for(let i = 0, j = 1, k = 1; i < data.drinks.length; i++){
        
        // console.log(data.drinks[i].strDrink)
        // console.log(data.drinks[i].strInstructions)
        // console.log(Object.keys(data.drinks[i]))
        // document.querySelector('h2').innerText = data.drinks[i].strDrink
        // document.querySelector('h3').innerHTML = data.drinks[i].strInstructions
        // document.querySelector('img').src = data.drinks[i].strDrinkThumb
        
      while(data.drinks[i][`strIngredient${j}`] !== null){
          let ingredient = document.createElement('li')
          ingredient.innerText = data.drinks[i][`strIngredient${j}`]
          document.querySelector('#ingredient').appendChild(ingredient)
          j++
      }
      while(data.drinks[i][`strMeasure${k}`] !== null){
          let measure = document.createElement('li')
          measure.innerText = data.drinks[i][`strMeasure${k}`]
          document.querySelector('#measurements').appendChild(measure)
          k++
      }
        
        // if( i > 0 && data.drinks[0][`strIngredient${i}`] !== null){ 
        //   let ingredient = document.createElement('li')
        //   ingredient.innerText = data.drinks[0][`strIngredient${i}`]
        //   document.querySelector('ul').appendChild(ingredient)
        // }
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

function nextCocktail(){
  let li = document.getElementsByTagName('li')
          while(li.length > 0){
            li[0].remove();
        }
  count++
  console.log(count)
  let drink = document.querySelector('input').value.toLowerCase().trim();
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)

    .then(res => res.json()) // parse response as JSON
    .then(data => {
      // console.log(data.drinks)
      // console.log(count)

          document.querySelector('h2').innerText = data.drinks[count].strDrink
          document.querySelector('h3').innerHTML = data.drinks[count].strInstructions
          document.querySelector('img').src = data.drinks[count].strDrinkThumb
      
      // document.querySelector('ul').innerHTML = '';  THIS WILL REMOVE ALL CODE IN THE UL
      for(let i = count, j = 1, k = 1; i < data.drinks.length; i++){
        
        // console.log(data.drinks[i].strDrink)
        // console.log(data.drinks[i].strInstructions)
        // console.log(Object.keys(data.drinks[i]))
        // document.querySelector('h2').innerText = data.drinks[i].strDrink
        // document.querySelector('h3').innerHTML = data.drinks[i].strInstructions
        // document.querySelector('img').src = data.drinks[i].strDrinkThumb
        
      while(data.drinks[i][`strIngredient${j}`] !== null){
          let ingredient = document.createElement('li')
          ingredient.innerText = data.drinks[i][`strIngredient${j}`]
          document.querySelector('#ingredient').appendChild(ingredient)
          j++
      }
      while(data.drinks[i][`strMeasure${k}`] !== null){
          let measure = document.createElement('li')
          measure.innerText = data.drinks[i][`strMeasure${k}`]
          document.querySelector('#measurements').appendChild(measure)
          k++
      }
}})
    .catch(err => {
        console.log(`error ${err}`)
    });
}


function prevCocktail(){
      let li = document.getElementsByTagName('li')
      while(li.length > 0){
        li[0].remove();
    }
    count--
    console.log(count)
    let drink = document.querySelector('input').value.toLowerCase().trim();
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)

    .then(res => res.json()) // parse response as JSON
    .then(data => {
    // console.log(data.drinks)
    // console.log(count)

      document.querySelector('h2').innerText = data.drinks[count].strDrink
      document.querySelector('h3').innerHTML = data.drinks[count].strInstructions
      document.querySelector('img').src = data.drinks[count].strDrinkThumb

    // document.querySelector('ul').innerHTML = '';  THIS WILL REMOVE ALL CODE IN THE UL
    for(let i = count, j = 1, k = 1; i < data.drinks.length; i++){

    // console.log(data.drinks[i].strDrink)
    // console.log(data.drinks[i].strInstructions)
    // console.log(Object.keys(data.drinks[i]))
    // document.querySelector('h2').innerText = data.drinks[i].strDrink
    // document.querySelector('h3').innerHTML = data.drinks[i].strInstructions
    // document.querySelector('img').src = data.drinks[i].strDrinkThumb

    while(data.drinks[i][`strIngredient${j}`] !== null){
      let ingredient = document.createElement('li')
      ingredient.innerText = data.drinks[i][`strIngredient${j}`]
      document.querySelector('#ingredient').appendChild(ingredient)
      j++
    }
    while(data.drinks[i][`strMeasure${k}`] !== null){
      let measure = document.createElement('li')
      measure.innerText = data.drinks[i][`strMeasure${k}`]
      document.querySelector('#measurements').appendChild(measure)
      k++
    }
    }})
    .catch(err => {
    console.log(`error ${err}`)
    });
}