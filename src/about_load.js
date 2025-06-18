export {loadAbout};

function loadAbout() {
    const parent = document.querySelector("#content");
    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to Petey's Restaurant!";

    const about = document.createElement("p");
    about.textContent = "HOOOOOO Boy, here's a bunch of info, some might even call it an overshare regarding our origins. This will most likely be read as frequently as the preamble to a recipe \"blog\". But, alas, it's here and hopefully you'll be a great tipper and frequent guest(haveing learned so much about our journey";
    const description = document.createElement("div");
    description.textContent = "Anyways, here's a realistic artist's renering of one of our menu items"
    const image = document.createElement("div");
    image.id = "food2";


    // append all the nodes to parent
    parent.append(h1, about, description, image);
}