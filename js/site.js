var meals = [
  {
    id: null,
    date: "2023-01-01",
    name: "Eggs and toast",
    type: "Breakfast",
    calories: 500,
    protein: 40,
    fiber: 10,
    weight: 500,
    water: 0.5,
  },
  {
    id: null,
    date: "2023-01-01",
    name: "Soup and sandwich",
    type: "Lunch",
    calories: 600,
    protein: 40,
    fiber: 10,
    weight: 500,
    water: 0.5,
  },
  {
    id: null,
    date: "2023-01-01",
    name: "Chicken and sald",
    type: "Dinner",
    calories: 900,
    protein: 40,
    fiber: 10,
    weight: 500,
    water: 0.5,
  },
  {
    id: null,
    date: "2023-01-02",
    name: "Pancakes and bacon",
    type: "Breakfast",
    calories: 500,
    protein: 40,
    fiber: 10,
    weight: 500,
    water: 0.5,
  },
  {
    id: null,
    date: "2023-01-02",
    name: "burrito",
    type: "Lunch",
    calories: 600,
    protein: 40,
    fiber: 10,
    weight: 500,
    water: 0.5,
  },
  {
    id: null,
    date: "2023-01-02",
    name: "Steak and potatoes",
    type: "Dinner",
    calories: 900,
    protein: 40,
    fiber: 10,
    weight: 500,
    water: 0.5,
  },
  {
    id: null,
    date: "2023-01-03",
    name: "Bacon McMuffin",
    type: "Breakfast",
    calories: 500,
    protein: 40,
    fiber: 10,
    weight: 500,
    water: 0.5,
  },
  {
    id: null,
    date: "2023-01-03",
    name: "Donair",
    type: "Lunch",
    calories: 600,
    protein: 40,
    fiber: 10,
    weight: 500,
    water: 0.5,
  },
  {
    id: null,
    date: "2023-01-03",
    name: "Rice and chicken",
    type: "Dinner",
    calories: 900,
    protein: 40,
    fiber: 10,
    weight: 500,
    water: 0.5,
  },
  {
    id: null,
    date: "2023-01-04",
    name: "French toast",
    type: "Breakfast",
    calories: 500,
    protein: 40,
    fiber: 10,
    weight: 500,
    water: 0.5,
  },
  {
    id: null,
    date: "2023-01-04",
    name: "BLT",
    type: "Lunch",
    calories: 600,
    protein: 40,
    fiber: 10,
    weight: 500,
    water: 0.5,
  },
  {
    id: null,
    date: "2023-01-04",
    name: "Lamb curry",
    type: "Dinner",
    calories: 900,
    protein: 40,
    fiber: 10,
    weight: 500,
    water: 0.5,
  },
  {
    id: null,
    date: "2023-01-05",
    name: "Eggs and toast",
    type: "Breakfast",
    calories: 500,
    protein: 40,
    fiber: 10,
    weight: 500,
    water: 0.5,
  },
  {
    id: null,
    date: "2023-01-05",
    name: "Soup and sandwich",
    type: "Lunch",
    calories: 600,
    protein: 40,
    fiber: 10,
    weight: 500,
    water: 0.5,
  },
  {
    id: null,
    date: "2023-01-05",
    name: "Chicken and sald",
    type: "Dinner",
    calories: 900,
    protein: 40,
    fiber: 10,
    weight: 500,
    water: 0.5,
  },
  {
    id: null,
    date: "2023-01-06",
    name: "Pancakes and bacon",
    type: "Breakfast",
    calories: 500,
    protein: 40,
    fiber: 10,
    weight: 500,
    water: 0.5,
  },
  {
    id: null,
    date: "2023-01-06",
    name: "burrito",
    type: "Lunch",
    calories: 600,
    protein: 40,
    fiber: 10,
    weight: 500,
    water: 0.5,
  },
  {
    id: null,
    date: "2023-01-06",
    name: "Steak and potatoes",
    type: "Dinner",
    calories: 900,
    protein: 40,
    fiber: 10,
    weight: 500,
    water: 0.5,
  },
  {
    id: null,
    date: "2023-01-07",
    name: "Bacon McMuffin",
    type: "Breakfast",
    calories: 500,
    protein: 40,
    fiber: 10,
    weight: 500,
    water: 0.5,
  },
  {
    id: null,
    date: "2023-01-07",
    name: "Donair",
    type: "Lunch",
    calories: 600,
    protein: 40,
    fiber: 10,
    weight: 500,
    water: 0.5,
  },
  {
    id: null,
    date: "2023-01-07",
    name: "Rice and chicken",
    type: "Dinner",
    calories: 900,
    protein: 40,
    fiber: 10,
    weight: 500,
    water: 0.5,
  },
];

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

function getAllMeals() {
  let data = localStorage.getItem("jgMealZealMeals");

  if (data == null) {
    let exampleMeals = meals.map((meal) => {
      meal.id = generateId();
      return meal;
    });
    localStorage.setItem("jgMealZealMeals", JSON.stringify(exampleMeals));
    data = localStorage.getItem("jgMealZealMeals");
  }

  let allMeals = JSON.parse(data);

  if (
    allMeals.some((meal) => meal.id == null) ||
    allMeals.some((meal) => meal.id == undefined)
  ) {
    allMeals.forEach((meal) => (meal.id = generateId()));
    localStorage.setItem("jgMealZealMeals", JSON.stringify(allMeals));
  }

  // allMeals = allMeals.sort(
  //   (meal1, meal2) =>
  //     Number(new Date(meal1.date)) - Number(new Date(meal2.date))
  // );
  return allMeals;
}

function addMeal() {
  let mealDate = new Date(document.getElementById("newMealDate").value)
    .toISOString()
    .split("T")[0];
  let mealName = document.getElementById("newMealName").value;
  let mealType = document.getElementById("newMealType").value;
  let mealCalories = parseInt(document.getElementById("newMealCalories").value);
  let mealProtein = parseInt(document.getElementById("newMealProtein").value);
  let mealFiber = parseInt(document.getElementById("newMealFiber").value);

  let newMeal = {
    id: generateId(),
    date: mealDate,
    name: mealName,
    type: mealType,
    calories: mealCalories,
    protein: mealProtein,
    fiber: mealFiber,
  };

  let allMeals = getAllMeals();
  allMeals.push(newMeal);
  localStorage.setItem("jgMealZealMeals", JSON.stringify(allMeals));

  displayMeals();
  document.getElementById("newMealForm").reset();
}

function deleteMeal() {
  let mealId = document.getElementById("editMealId").value;

  let allMeals = getAllMeals();

  let filteredMeals = allMeals.filter((meal) => meal.id != mealId);

  localStorage.setItem("jgMealZealMeals", JSON.stringify(filteredMeals));

  displayMeals();
}

function editMeal(mealRow) {
  let mealId = mealRow.getAttribute("data-identifier");

  let allMeals = getAllMeals();

  let mealToEdit = allMeals.find((mealObject) => mealObject.id == mealId);

  document.getElementById("editMealId").value = mealToEdit.id;
  document.getElementById("editMealName").value = mealToEdit.name;
  document.getElementById("editMealType").value = mealToEdit.type;
  document.getElementById("editMealCalories").value = mealToEdit.calories;
  document.getElementById("editMealProtein").value = mealToEdit.protein;
  document.getElementById("editMealFiber").value = mealToEdit.fiber;

  let mealDate = new Date(mealToEdit.date);
  let mealDateString = mealDate.toISOString();
  let formattedDate = mealDateString.split("T")[0];
  document.getElementById("editMealDate").value = formattedDate;
}

function updateMeal() {
  let mealId = document.getElementById("editMealId").value;
  let mealName = document.getElementById("editMealName").value;
  let mealType = document.getElementById("editMealType").value;
  let mealCalories = parseInt(
    document.getElementById("editMealCalories").value
  );
  let mealProtein = parseInt(document.getElementById("editMealProtein").value);
  let mealFiber = parseInt(document.getElementById("editMealFiber").value);

  let mealDate = new Date(
    document.getElementById("editMealDate").value + "T00:00"
  )
    .toISOString()
    .split("T")[0];

  let newMeal = {
    id: mealId,
    date: mealDate,
    name: mealName,
    type: mealType,
    calories: mealCalories,
    protein: mealProtein,
    fiber: mealFiber,
  };

  let allMeals = getAllMeals();

  let index = allMeals.findIndex((meal) => meal.id == mealId);

  allMeals[index] = newMeal;

  localStorage.setItem("jgMealZealMeals", JSON.stringify(allMeals));
  displayMeals();
}

function displayMeals() {
  const mealTable = document.getElementById("mealTable");
  const template = document.getElementById("dailyTableRowTemplate");
  mealTable.innerHTML = "";
  let allMeals = getAllMeals();
  for (let i = 0; i < allMeals.length; i++) {
    let meal = allMeals[i];

    let tableRow = document.importNode(template.content, true);

    tableRow.querySelector('[data-id="date"]').textContent = meal.date;
    tableRow.querySelector('[data-id="mealName"]').textContent = meal.name;
    tableRow.querySelector('[data-id="mealType"]').textContent = meal.type;
    tableRow.querySelector('[data-id="calories"]').textContent = meal.calories;
    tableRow.querySelector('[data-id="protein"]').textContent = meal.protein;
    tableRow.querySelector('[data-id="fiber"]').textContent = meal.fiber;
    tableRow.querySelector('[data-id="weight"]').textContent = meal.weight;
    tableRow.querySelector('[data-id="water"]').textContent = meal.water;

    tableRow.querySelector("tr").setAttribute("data-identifier", meal.id);

    mealTable.appendChild(tableRow);
  }
}

function generateId() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

function calculateCards(mealArray) {
  let calorieCount = 0;
  let proteinCount = 0;
  let fiberCount = 0;
  let waterCount = 0;

  for (let i = 0; i < mealArray.length; i++) {
    calorieCount += mealArray[i].calories;
    proteinCount += mealArray[i].protein;
    fiberCount += mealArray[i].fiber;
    waterCount += mealArray[i].water;
  }

  document.getElementById("calorieCount").value = calorieCount;
  document.getElementById("proteinCount").value = proteinCount;
  document.getElementById("fiberCount").value = fiberCount;
  document.getElementById("waterCount").value = waterCount;
}

function entryFunction() {
  let meals = getAllMeals();
}

function displayMeals2(meals, timeFrame) {
  const mealTable = document.getElementById("mealTable");
  const mealTableHeader = document.getElementById("mealTableHeader");
  mealTableHeader.innerHTML = "";
  mealTable.innerHTML = "";

  if (timeFrame == "daily") {
    document.getElementById("addDataButton").classList.remove("d-none");
    document.getElementById("editDataButton").classList.remove("d-none");
    let rowTemplate = document.getElementById("dailyTableRowTemplate");
    let headerTemplate = document.getElementById("dailyTableHeaderTemplate");
    mealTableHeader.appendChild(
      document.importNode(headerTemplate.content, true)
    );

    for (let i = 0; i < meals.length; i++) {
      let meal = meals[i];

      let tableRow = document.importNode(rowTemplate.content, true);

      tableRow.querySelector('[data-id="date"]').textContent = meal.date;
      tableRow.querySelector('[data-id="mealName"]').textContent = meal.name;
      tableRow.querySelector('[data-id="mealType"]').textContent = meal.type;
      tableRow.querySelector('[data-id="calories"]').textContent =
        meal.calories;
      tableRow.querySelector('[data-id="protein"]').textContent = meal.protein;
      tableRow.querySelector('[data-id="fiber"]').textContent = meal.fiber;
      tableRow.querySelector('[data-id="weight"]').textContent = meal.weight;
      tableRow.querySelector('[data-id="water"]').textContent = meal.water;

      tableRow.querySelector("tr").setAttribute("data-identifier", meal.id);

      mealTable.appendChild(tableRow);
    }
  } else {
    document.getElementById("addDataButton").classList.add("d-none")
    document.getElementById("editDataButton").classList.add("d-none");
    document.getElementById('timeFrameHeader').textContent = timeFrame
    let rowTemplate = document.getElementById("filteredTableRowTemplate");
    let headerTemplate = document.getElementById("filteredTableHeaderTemplate");
    mealTableHeader.appendChild(
      document.importNode(headerTemplate.content, true)
    );

    for (let i = 0; i < meals.length; i++) {
      let meal = meals[i];

      let tableRow = document.importNode(rowTemplate.content, true);

      tableRow.querySelector('[data-id="timeFrame"]').textContent = meal.date;
      tableRow.querySelector('[data-id="calories"]').textContent =
        meal.calories;
      tableRow.querySelector('[data-id="protein"]').textContent = meal.protein;
      tableRow.querySelector('[data-id="fiber"]').textContent = meal.fiber;
      tableRow.querySelector('[data-id="water"]').textContent = meal.water;
      mealTable.appendChild(tableRow);
    }
  }
}

function filterMeals(timeFrame) {
  let allMeals = getAllMeals()

  if (timeFrame == "weekly")
  {

  }
  else if (timeFrame == "monthly")
  {

  }
  else if (timeFrame == "yearly")
  {
    
  }
}
