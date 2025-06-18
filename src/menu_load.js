export { loadMenu };

function loadMenu() {
    const parent = document.querySelector("#content");
    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to Petey's Restaurant!";

    const about = document.createElement("p");
    about.textContent = "Coming Soon: our menu";
    const description = document.createElement("div");
    description.textContent = "Anyways, here's a realistic artist's renering of one of our menu items"
    const image = document.createElement("div");
    image.id = "food3";


    // append all the nodes to parent
    parent.append(h1, about, description, image);
}