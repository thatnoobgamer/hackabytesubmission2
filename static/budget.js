let categories = ["groceries", "clothing", "electronics", "furniture", "books", "sports", "health", "beauty", "automotive"];
let categoryAmounts = [100, 200, 300, 400, 500, 600, 700, 800, 900];

let categoriesDiv = document.getElementById("cats");

let categoryNameInput = document.getElementById("cat-name")
let categoryCostInput = document.getElementById("cat-cost")

function pushCategory(category, categoryAmount) {
    // if not blank
    if (category != "" && categoryAmount != "") {
        categories.push(category);
        categoryAmounts.push(categoryAmount);
    }

    console.log(categories, categoryAmounts);

    // clear input
    categoryNameInput.value = "";
    categoryCostInput.value = "";
}

function renderCategories() {
    categoriesDiv.innerHTML = "";

    for (i = 0; i < categories.length; i++) {
        let categoryCard = document.createElement("div");
        categoryCard.setAttribute("class", "category-card");

        let categoryName = document.createElement("div");
        categoryCard.setAttribute("class", "category-name-final");
        categoryName.innerText = categories[i];
        categoryCard.appendChild(categoryName);

        let categoryCost = document.createElement("div");
        categoryCost.setAttribute("class", "category-cost-final");
        categoryCost.innerText = categoryAmounts[i];
        categoryCard.appendChild(categoryCost);

        categoriesDiv.appendChild(categoryCard);
    }
}

function addCategory(category, categoryAmount) {
    pushCategory(category, categoryAmount);
    renderCategories();
}

window.onload = renderCategories();

/*

function addCategory(category, categoryamount) {
    categories.push(category);
    categoryamounts.push(parseInt(categoryamount));
    let budcat = document.getElementById("budcat");
    let plusButton = document.getElementById("+");
    
    document.body.append(budcat);
    document.body.append(plusButton);
    for (let i = 0; i < categories.length; i++) {
        let box = document.createElement("div");
        box.className = "category-box"; 
        box.innerHTML = `
            <p id="budget-name">Budget Name: </p>
            <p id="category-input"></p>
            <p id="category-budget-input"></p>
            <button id="remove-category-button" onclick="removeCategory(this.parentElement.children[1].textContent)">🗑</button>
            <button id="edit-category-button" onclick="editCategory(this.parentElement.children[1].textContent)">✏️</button>
        `;
        document.body.appendChild(box);
        document.getElementById("category-input").textContent = categories[i];
        document.getElementById("category-budget-input").textContent = "Budget Amount: " + categoryamounts[i];
        document.getElementById("category-input").id = 'category-input' + i;
        document.getElementById("category-budget-input").id = 'category-budget-input' + i;
        document.getElementById("remove-category-button").id = 'remove-category-button' + i;
        document.getElementById("edit-category-button").id = 'edit-category-button' + i;
        document.getElementById("budget-name").id = 'budget-name' + i;
    }
}

function removeCategory(category) {
    let budcat = document.getElementById("budcat");
    let plusButton = document.getElementById("+");
    document.body.innerHTML = "";
    document.body.innerHTML = `<div class="navbar">
        <a href="/">Home</a>
        <a class="active"href="/budget">Budget</a>
    </div>`;
    document.body.append(budcat);
    document.body.append(plusButton);
    let categoryindex = categories.indexOf(category);
    categories.splice(categoryindex, 1);
    categoryamounts.splice(categoryindex, 1);
    for (let i = 0; i < categories.length; i++) {
        let box = document.createElement("div");
        box.className = "category-box"; 
        box.innerHTML = `
            <p id="budget-name">Budget Name: </p>
            <p id="category-input"></p>
            <p id="category-budget-input"></p>
            <button id="remove-category-button" onclick="removeCategory(this.parentElement.children[1].textContent)">🗑</button>
            <button id="edit-category-button" onclick="editCategory(this.parentElement.children[1].textContent)">✏️</button>
        `;
        document.body.appendChild(box);
        document.getElementById("category-input").textContent = categories[i];
        document.getElementById("category-budget-input").textContent = "Budget Amount: " + categoryamounts[i];
        document.getElementById("category-input").id = 'category-input' + i;
        document.getElementById("category-budget-input").id = 'category-budget-input' + i;
        document.getElementById("remove-category-button").id = 'remove-category-button' + i;
        document.getElementById("edit-category-button").id = 'edit-category-button' + i;
        document.getElementById("budget-name").id = 'budget-name' + i;
    }
}

function removeCategoryThere(category) {
    let budcat = document.getElementById("budcat");
    let plusButton = document.getElementById("+");
    document.body.innerHTML = "";
    document.body.innerHTML = `<div class="navbar">
        <a href="/">Home</a>
        <a class="active" href="/budget">Budget</a>
    </div>`;
    document.body.append(budcat);
    document.body.append(plusButton);
    let categoryindex = categories.indexOf(category);
    categories.splice(categoryindex, 1);
    categoryamounts.splice(categoryindex, 1);
    for (let i = 0; i < categories.length; i++) {
        let box = document.createElement("div");
        box.className = "category-box-alreadythere"; 
        box.innerHTML = `
            <p id="budget-name">Budget Name: </p>
            <p id="category-input-alreadythere"></p>
            <p id="category-budget-input-alreadythere"></p>
            <button id="remove-category-button" onclick="removeCategoryThere(this.parentElement.children[1].textContent)">🗑</button>
            <button id="edit-category-button" onclick="editCategory(this.parentElement.children[1].textContent)">✏️</button>
        `;
        document.body.appendChild(box);
        document.getElementById("category-input-alreadythere").textContent = categories[i];
        document.getElementById("category-budget-input-alreadythere").textContent = "Budget Amount: " + categoryamounts[i];
        document.getElementById("category-input-alreadythere").id = 'category-input-alreadythere' + i;
        document.getElementById("category-budget-input-alreadythere").id = 'category-budget-input-alreadythere' + i;
        document.getElementById("remove-category-button").id = 'remove-category-button' + i;
        document.getElementById("edit-category-button").id = 'edit-category-button' + i;
        document.getElementById("budget-name").id = 'budget-name' + i;
    }
}

function makeCategoryAdditionBox() {
    let box = document.createElement("div");
    box.className = "category-box";
    box.innerHTML = `
        <input type="text" id="category-input" placeholder="Enter category name" />
        <input type="text" id="category-budget-input" placeholder="Enter budget amount" />
        <button id="add-category-button" onclick="addCategory(this.parentElement.firstElementChild.value, this.parentElement.children[1].value)">Add Category</button>
        <button id="remove-category-button" onclick="this.parentElement.remove()">🗑</button>
    `;
    document.body.appendChild(box); 
}

document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < categories.length; i++) {
        let box = document.createElement("div");
        box.className = "category-box-alreadythere"; 
        box.innerHTML = `
            <p id="budget-name">Budget Name: </p>
            <p id="category-input-alreadythere"></p>
            <p id="category-budget-input-alreadythere"></p>
            <button id="remove-category-button" onclick="removeCategoryThere(this.parentElement.children[1].textContent)">🗑</button>
            <button id="edit-category-button" onclick="editCategory(this.parentElement.children[1].textContent)">✏️</button>
        `;
        document.body.appendChild(box);
        document.getElementById("category-input-alreadythere").textContent = categories[i];
        document.getElementById("category-budget-input-alreadythere").textContent = "Budget Amount: " + categoryamounts[i];
        document.getElementById("category-input-alreadythere").id = 'category-input-alreadythere' + i;
        document.getElementById("category-budget-input-alreadythere").id = 'category-budget-input-alreadythere' + i;
        document.getElementById("remove-category-button").id = 'remove-category-button' + i;
        document.getElementById("edit-category-button").id = 'edit-category-button' + i;
        document.getElementById("budget-name").id = 'budget-name' + i;
    }
}, false);
function editCategory(category) {
    let categoryindex = categories.indexOf(category);
    if (categoryindex === -1) return;

    let box = document.createElement("div");
    box.className = "category-box";
    box.innerHTML = `
        <input type="text" id="category-input" placeholder="Enter new category name" value="${categories[categoryindex]}" />
        <input type="text" id="category-budget-input" placeholder="Enter new budget amount" value="${categoryamounts[categoryindex]}" />
        <button id="edit-category-button" onclick="submitEditCategory(this.parentElement.firstElementChild.value, this.parentElement.children[1].value, '${category}')">Confirm Category Change</button>
    `;
    document.body.innerHTML = ""; // Clear the page
    document.body.appendChild(box); // Add the edit box
}

function submitEditCategory(newcategory, newcategoryamount, oldcategory) {
    let categoryindex = categories.indexOf(oldcategory);
    if (categoryindex !== -1) {
        categories[categoryindex] = newcategory;
        categoryamounts[categoryindex] = parseInt(newcategoryamount);
        document.body.innerHTML = "";
        document.body.innerHTML = `<div class="navbar">
            <a href="/">Home</a>
            <a class="active" href="/budget">Budget</a>
            </div>
        <h1 id="budcat">Budget Categories</h1>
        <button id="+" onclick="makeCategoryAdditionBox()">+</button>`;
        for (let i = 0; i < categories.length; i++) {
            let box = document.createElement("div");
            box.className = "category-box-alreadythere"; 
            box.innerHTML = `
                <p id="budget-name">Budget Name: </p>
                <p id="category-input-alreadythere"></p>
                <p id="category-budget-input-alreadythere"></p>
                <button id="remove-category-button" onclick="removeCategoryThere(this.parentElement.children[1].textContent)">🗑</button>
                <button id="edit-category-button" onclick="editCategory(this.parentElement.children[1].textContent)">✏️</button>
            `;
            document.body.appendChild(box);
            document.getElementById("category-input-alreadythere").textContent = categories[i];
            document.getElementById("category-budget-input-alreadythere").textContent = "Budget Amount: " + categoryamounts[i];
            document.getElementById("category-input-alreadythere").id = 'category-input-alreadythere' + i;
            document.getElementById("category-budget-input-alreadythere").id = 'category-budget-input-alreadythere' + i;
            document.getElementById("remove-category-button").id = 'remove-category-button' + i;
            document.getElementById("edit-category-button").id = 'edit-category-button' + i;
            document.getElementById("budget-name").id = 'budget-name' + i;
        }
    }
}

*/