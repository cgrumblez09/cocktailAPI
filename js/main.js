//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('#search').addEventListener('click', searchCocktail);
document.querySelector('#forward').addEventListener('click', nextCocktail)
document.querySelector('#backward').addEventListener('click', prevCocktail)

let drinkArr = [];
// COUNT IS TO TRACK WHERE IN THE ARRAY THE LIST IS ON, STARTS AT INDEX 0
let count = 0; 
// console.log(count)


// FUNCTION BELOW RETURNS THE INPUT DRINK AT THE BEGINNING OF THE ARRAY, INDEX 0
function searchCocktail(){

        let drink = document.querySelector('input').value.toLowerCase().trim();
        
      //SUPPOSED TO REMOVE ANY 'li' IN THE UL OF INGREDIENTS AND MEASUREMENTS  
      let li = document.getElementsByTagName('li')
          while(li.length > 0){
            li[0].remove();
        }

        //MAKES THE NEXT AND PREVIOUS BUTTONS APPEAR AFTER A DRINK IS ENTERED 
        document.querySelector('#forward').style.display = 'inline';
        document.querySelector('#backward').style.display = 'inline';

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)

    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)
      console.log(data.drinks.length)

      // WHENEVER A NEW DRINK IS INPUT, THE COUNT GOES TO 0 TO START AT THE BEGINNING OF DRINKS LIST
      count = 0;
      console.log(count)
      
        // BELOW CODE ADDS THE RECIPE #, THE DRINK NAME, DRINK INSTRUCTION AND DRINK IMAGE
          document.querySelector('#recipeNum').innerText = `Recipe Num: ${count + 1} of ${data.drinks.length}`
          document.querySelector('h2').innerText = data.drinks[count].strDrink
          document.querySelector('#instruct').innerHTML = data.drinks[count].strInstructions
          document.querySelector('img').src = data.drinks[count].strDrinkThumb
      
      // document.querySelector('ul').innerHTML = '';  THIS WILL REMOVE ALL CODE IN THE UL
      // for(let i = 0, j = 1, k = 1; i < data.drinks.length; i++){

      let i = count, j = 1, k = 1;
      // BELOW IS TO DISPLAY DRINK INGREDIENTS AND MEASUREMENTS
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
    // }
  })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// BELOW FUNCTION MOVES THE DRINK TO THE NEXT ON THE LIST
function nextCocktail(){

  //SUPPOSED TO REMOVE ANY 'li' IN THE UL OF INGREDIENTS AND MEASUREMENTS
  let li = document.getElementsByTagName('li')
    while(li.length > 0){
      li[0].remove();
    }
  // COUNT++ MOVES TO NEXT DRINK ON THE DRINK LIST
  count++
  console.log(count)

  let drink = document.querySelector('input').value.toLowerCase().trim();
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)

    .then(res => res.json()) // parse response as JSON
    .then(data => {
      // console.log(data.drinks)
      // console.log(count)

      // IF COUNT GOES ABOVE TOTAL DRINKS IN LIST ROTATE TO BEGINNING OF LIST
      if(count > data.drinks.length - 1){
        console.log(count = 0)
        count = 0
      }

    // BELOW CODE CHANGES DOM TO NEXT DRINK
      document.querySelector('#recipeNum').innerText = `Recipe Num: ${count + 1} of ${data.drinks.length}`
      document.querySelector('h2').innerText = data.drinks[count].strDrink
      document.querySelector('#instruct').innerHTML = data.drinks[count].strInstructions
      document.querySelector('img').src = data.drinks[count].strDrinkThumb
      
      // document.querySelector('ul').innerHTML = '';  THIS WILL REMOVE ALL CODE IN THE UL
      
      // for(let i = count, j = 1, k = 1; i < data.drinks.length; i++){
      // BELOW IS TO DISPLAY DRINK INGREDIENTS AND MEASUREMENTS
      let i = count, j = 1, k = 1;
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
    // }
})
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// BELOW FUNCTION MOVES THE DRINK LIST TO THE PREVIOUS DRINK
function prevCocktail(){
    //SUPPOSED TO REMOVE ANY 'li' IN THE UL OF INGREDIENTS AND MEASUREMENTS
    let li = document.getElementsByTagName('li')
      while(li.length > 0){
        li[0].remove();
      }
    // COUNT-- MOVES THE COUNT TO THE PREVIOUS INDEX ON THE ARRAY OF DRINKS
    count--
    console.log(count)
    
    let drink = document.querySelector('input').value.toLowerCase().trim();
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)

    .then(res => res.json()) // parse response as JSON
    .then(data => {
    
    // IF COUNT IS BELOW 0 DATA ROTATES TO THE TAIL OF DRINKS LIST
    if(count < 0){
      console.log(data.drinks.length -1)
      count = data.drinks.length -1
    }

    // BELOW MANIPULATES DOM
    document.querySelector('#recipeNum').innerText = `Recipe Num: ${count + 1} of ${data.drinks.length}`
    document.querySelector('h2').innerText = data.drinks[count].strDrink
    document.querySelector('#instruct').innerHTML = data.drinks[count].strInstructions
    document.querySelector('img').src = data.drinks[count].strDrinkThumb

    // document.querySelector('ul').innerHTML = '';  THIS WILL REMOVE ALL CODE IN THE UL
    
    // for(let i = count, j = 1, k = 1; i < data.drinks.length; i++){
    // BELOW IS TO DISPLAY DRINK INGREDIENTS AND MEASUREMENTS
    let i = count, j = 1, k = 1;
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
  // }
  })
    .catch(err => {
    console.log(`error ${err}`)
    });
}