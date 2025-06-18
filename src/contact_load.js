export { loadContact };

function loadContact() {
    const parent = document.querySelector("#content");
    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to Petey's Restaurant!";

    const about = document.createElement("h2");
    about.textContent = "Contact Info";
    const phone = document.createElement("p");
    phone.textContent = "Phone: 555-555-5555";
    const email = document.createElement("p");
    email.textContent = "Email: restaurant.name@somedomain.extension";
    const address = document.createElement("p");
    address.textContent = " Address: 1234 Main St., Your City, Your State"

    const description = document.createElement("div");
    description.textContent = "Anyways, here's a realistic artist's renering of one of our menu items"
    const image = document.createElement("div");
    image.id = "food1";


    // append all the nodes to parent
    parent.append(h1, about, phone, email, address, description, image);
}