export {loadHome};


function loadHome() {
    const parent = document.querySelector("#content");
    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to Petey's Restaurant!";
    

    const about = document.createElement("div");
    about.textContent = "Located in the heart of town name here, Petey's is a place to get food, enjoy some atmosphere of ambiguous quality, and certainly pay less than you would at some other restaurant in town that goes by the name of \"Bluto's\". Ugh, Bluto's is the wooooorst.";
    

    const examples = document.createElement("div");
    examples.classList = "food-examples";

    const food1 = document.createElement("div");
    food1.id = "food1";
    
    const food2 = document.createElement("div");
    food2.id = "food2";

    const food3 = document.createElement("div");
    food3.id = "food3";

    examples.append(food1, food2, food3);
    
    parent.append(h1, about, examples);
 }