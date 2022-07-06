const list = document.querySelector("#categories");
console.log("list", list);


const findLengdth = document.querySelector("#categories");
console.log(`Number of categories: ${findLengdth.children.length}`);


const findCategories = document.querySelectorAll(".item");
for (const findCategory of findCategories) {
    const categoryName = findCategory.querySelector("h2");
    const categoryLengdth = findCategory.querySelector("ul")
    console.log(`Category: ${categoryName.textContent}, Elements: ${categoryLengdth.children.length}`);
}

