let categories = ["groceries", "clothing", "electronics", "furniture", "books", "sports", "health", "beauty", "automotive"];
let categoryAmounts = [100, 200, 300, 400, 500, 600, 700, 800, 900];

let budget = 0;
let budgetSpan = document.getElementById("budget");
let finalBudgetSpan = document.getElementById("budget-final");

let categoriesDiv = document.getElementById("cats");

let categoryNameInput = document.getElementById("cat-name");
let categoryCostInput = document.getElementById("cat-cost");

let budgetInput = document.getElementById("budget-input");

function updateBudget() {
    let totalExpenses = categoryAmounts.reduce((sum, amount) => sum + parseFloat(amount), 0);
    if (budget == 0) {
        finalBudget = 0;
    }
    else {
        finalBudget = budget - totalExpenses;
    }
}

function render() {
    categoriesDiv.innerHTML = "";

    budgetSpan.innerText = `${parseFloat(budget).toFixed(2)}`;
    let finalBudgetSpan = document.getElementById("budget-final");
    if (finalBudgetSpan) {
        finalBudgetSpan.textContent =  `${finalBudget.toFixed(2)}`;
    }

    for (i = 0; i < categories.length; i++) {
        let categoryCard = document.createElement("div");
        categoryCard.setAttribute("class", "category-card");

        let categoryName = document.createElement("div");
        categoryName.innerHTML = categories[i];
        categoryCard.appendChild(categoryName);

        let categoryCost = document.createElement("div");
        categoryCost.innerHTML = "&nbsp;$" + categoryAmounts[i] + "&nbsp;";
        categoryCard.appendChild(categoryCost);

        // <button id="remove-category-button" onclick="removeCategory(this.parentElement.children[1].textContent)">🗑</button>
        let categoryRemoveButton = document.createElement("button");
        categoryRemoveButton.setAttribute("class", "category-remove-button");
        categoryRemoveButton.setAttribute("onclick", "removeCategory(this.parentElement.children[0].textContent)");
        categoryRemoveButton.textContent = "🗑";
        categoryCard.appendChild(categoryRemoveButton);
        
        let categoryEditButton = document.createElement("button");
        categoryEditButton.setAttribute("class", "category-edit-button");
        categoryEditButton.setAttribute("onclick", "editCategory(this.parentElement.children[0].textContent)");
        categoryEditButton.textContent = "✏️";
        categoryCard.appendChild(categoryEditButton);

        categoriesDiv.appendChild(categoryCard);
    }
}

function editCategory(category) {
    let categoryIndex = categories.indexOf(category);
    if (categoryIndex > -1) {
        categoryNameInput.value = categories[categoryIndex];
        categoryCostInput.value = categoryAmounts[categoryIndex];
        spliceCategory(category);
    }
}

function update() {
    updateBudget();
    render();
    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem("budget", JSON.stringify(budget));
    localStorage.setItem("categories", JSON.stringify(categories));
    localStorage.setItem("categoryAmounts", JSON.stringify(categoryAmounts));
}

function pushCategory(category, categoryAmount) {
    // if not blank, and category is not duplicate
    if (category != "" && categoryAmount != "" && !categories.includes(category)) {
        categories.push(category);
        categoryAmounts.push(categoryAmount);

        // clear input
        categoryNameInput.value = "";
        categoryCostInput.value = "";
    }
}

function addCategory(category, categoryAmount) {
    pushCategory(category, categoryAmount);
    update();
}

function spliceCategory(category) {
    let categoryIndex = categories.indexOf(category);
    if (categoryIndex > -1) {
        categories.splice(categoryIndex, 1);
        categoryAmounts.splice(categoryIndex, 1);
    }
}

function removeCategory(category) {
    if (confirm("Are you sure you want to remove this category?")) {
        spliceCategory(category);
        update();
    }
    else {
        alert("No changes made.");
    }
}

function setBudget(budgetNew) {
    if (budgetNew != "") {
        budget = budgetNew;
    }
    update();
}

function restoreCategories() {
    if (confirm("Are you sure you want to restore the default categories?")) {
        localStorage.removeItem("categories");
        localStorage.removeItem("categoryAmounts");
        window.location.reload();
    }
    else {
        alert("No changes made.");
    }
}

function onLoad() {
    localStorage.getItem("categories") ? categories = JSON.parse(localStorage.getItem("categories")) : categories = categories;
    localStorage.getItem("categoryAmounts") ? categoryAmounts = JSON.parse(localStorage.getItem("categoryAmounts")) : categoryAmounts = categoryAmounts;
    update();
}

window.onload = onLoad();