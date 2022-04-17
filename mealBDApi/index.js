const loadSearch = () => {
  const searchData = document.getElementById("searchData");
  const searchValue = searchData.value;
  searchData.value = " ";

  if (searchValue == " ") {
    document.getElementById("notFount").innerText = "Not Found";
  } else {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => showMeals(data.meals));
  }
  // empty data
};

const showMeals = (meals) => {
    console.log(meals)
  const showParentData = document.getElementById("search_result");
  showParentData.textContent = " ";
  if (meals == null) {
      console.log('test')
     document.getElementById('dotShow').innerText = 'Not found';
  } else {
    meals.forEach((meals) => {
        console.log(meals);
        const createDiv = document.createElement("div");
        createDiv.classList.add("col-lg-4");
        createDiv.innerHTML = `
              <div class="card" onclick="LoadDetailsMeals(${meals.idMeal})">
                              <img src="${
                                meals.strMealThumb
                              }" class="card-img-top" alt="...">
                              <div class="card-body">
                                <h5 class="card-title">${meals.strMeal}</h5>
                                <p class="card-text">${meals.strInstructions.slice(
                                  0,
                                  100
                                )}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                              </div>
                            </div>
              `;
        showParentData.appendChild(createDiv);
      });
  }
 
};

const LoadDetailsMeals = async (mealsID) => {
  const idUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsID}`;
  const res = await fetch(idUrl);
  const data = await res.json();
  showDataDetailsMeals(data.meals[0])
//   fetch(idUrl)
//     .then((res) => res.json())
//     .then((data) => showDataDetailsMeals(data.meals[0]));
};

const showDataDetailsMeals = (details) => {
  const { idMeal, strArea, strCategory, strMeal, strMealThumb } = details;
  const mealsDetails = document.getElementById("mealDetails");
  const createDiv = document.createElement("div");
  createDiv.classList.add("details");
  createDiv.innerHTML = `
        <img src="${strMealThumb}" alt="">
        <h2>${strMeal}</h2>
        <p>${strArea}</p>
        <h5>${idMeal}</h5>
        <p>${strCategory}</p>
    `;
  mealsDetails.appendChild(createDiv);
};
