// question 1
const cat = {
    complain: function () {
        console.log("Meow!");
    }
}

// question 2
let headingElement = document.querySelector("h3");
headingElement.innerHTML = "Updated heading";

// question 3
headingElement.style.fontSize = "2em"

// question 4
// I have added the class to the css as well, although strictly speaking that wasn't the task? Wanted to test.
headingElement.classList.add("subheading");

// question 5
let paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// question 6
let resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// question 7
// iirc best practice would be to have the import at the beginning of the page, 
// but since it is only relevant for the following questions I will leave it here.
// also, import wasn't necessary if I linked both stylesheets in the index, but thought I'd use import. Idk what you want.
import { cats } from "./catsList.js";

const logNamesOfList = function (list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

logNamesOfList(cats);

// question 8
const createCats = function (cats) {
    let catsObject = "";

    for (let i = 0; i < cats.length; i++) {
        let age = ""
        if (cats[i].age !== undefined) {
            age = cats[i].age;
        } else {
            age = "Age unknown";
        }

        catsObject += `<div>
                            <h5>${cats[i].name}</h5>
                            <p>${age}</p>
                        </div>
                        `;
    }
    return catsObject;
}

let catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = createCats(cats);