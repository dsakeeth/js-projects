const searchbox = document.querySelector(".searchbox");
const searchbutton = document.querySelector(".searchbutton");
const recipecontainer = document.querySelector(".recipe-container");
const recipecontent=document.querySelector(".recipe-details-content")
const closebtn=document.querySelector(".recipe-close-btn");

const fetchrecipes = async (searchinput) => {
    recipecontainer.innerHTML="<h2>fetching Recipes...</h2>";
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchinput}`);
    let response = await data.json();
    recipecontainer.innerHTML="";
    response.meals.forEach(meal => {
        //console.log(meal);
        
        const recipediv=document.createElement('div');
        recipediv.classList.add("recipe");
        recipediv.innerHTML=
        `
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strArea}</p>
        <p>${meal.strCategory}</p>
        `
        const button=document.createElement("button");
        button.textContent="view Recipe";
        recipediv.appendChild(button);

        button.addEventListener("click",()=>{
            openrecipepopup(meal);
        });
        recipecontainer.appendChild(recipediv);
    });
}


searchbutton.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("submit clicked");
    const searchinput = searchbox.value.trim();
    if(searchinput!=""){    fetchrecipes(searchinput);}
});

let openrecipepopup=(meal)=>{
    recipecontent.innerHTML=`
    <h2 class="recipename"><a href="${meal.strYoutube}">${meal.strMeal}</a></h2>
    <h3>ingredients:</h3>
    <ul class="ingredientslist">
    ${fetchIngredients(meal)}
    </ul>
    <hr>
    <div>
    <h3>Instructions:</h3>
    <p class="recipeinstruction">
    ${meal.strInstructions}</p>
    </div>
    <button class="videobtn">
    Recipe process
    </button>
    `
    recipecontent.parentElement.style.display="block";
}

const fetchIngredients=(meal)=>{
    let ingredientslist="";
    for(let i=1;i<=20;i++){
        const ingredient=meal[`strIngredient${i}`];
        if(ingredient){
            const measurement=meal[`strMeasure${i}`];
            ingredientslist+=`<li>${measurement} ${ingredient}</li>`;
        }
        else{
        break;}
    }   
    return ingredientslist;
}

closebtn.addEventListener("click",()=>{
    recipecontent.parentElement.style.display="none";
});