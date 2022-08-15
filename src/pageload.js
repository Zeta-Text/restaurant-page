import Img from './vesuvios.jpeg';


function pageLoad () {
    const content = document.getElementById("content");

    const head = document.createElement("div");
    head.id = "head";
    head.innerText = "Vesuvio"
    content.appendChild(head);

    const menu = document.createElement("div");
    menu.id = "menu";
    content.appendChild(menu);

    const foodMenu = document.createElement("button");
    foodMenu.id = "foodMenu";
    foodMenu.classList.add("btn")
    foodMenu.innerText = "Menu";
    menu.appendChild(foodMenu);

    const about = document.createElement("button");
    about.id = "about";
    about.classList.add("btn")
    about.innerText = "About";
    menu.appendChild(about);

    const contact = document.createElement("button");
    contact.id = "contact";
    contact.classList.add("btn")
    contact.innerText = "Contact";
    menu.appendChild(contact);

    const mainContent = document.createElement("div");
    mainContent.id = "mainContent";
    content.appendChild(mainContent);

    const articleContent = document.createElement("article");
    articleContent.id = "articleContent";
    mainContent.appendChild(articleContent);

    const h = document.createElement("h");
    h.innerText = "Welcome to Vesuvio"
    h.id = "h";
    articleContent.appendChild(h);

    const imgContainter = document.createElement("div");
    articleContent.appendChild(imgContainter);

    const img = new Image()
    img.src = Img;
    img.id = "vesuvio-img";
    img.alt = "vesuvio from the outside";
    imgContainter.appendChild(img);

    const p = document.createElement("p");
    p.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu eros malesuada, congue sem ac, luctus elit. Cras bibendum lacus tortor, vitae fringilla est tincidunt semper. Donec eget convallis nibh, eget lacinia nisi. Curabitur condimentum vitae velit at ultrices. Suspendisse et consectetur dolor, vel laoreet tortor. Aliquam efficitur pharetra mauris, eu mattis nunc vehicula id. Praesent ligula quam, porta quis orci ut, viverra molestie diam. Nam quis odio consequat, vehicula lorem a, scelerisque turpis. Maecenas euismod, massa quis cursus dignissim, velit massa tristique metus, vitae lobortis justo tortor a magna. Fusce rhoncus fringilla odio ut maximus. Sed a lectus commodo diam commodo imperdiet sollicitudin id tellus. Sed eget ullamcorper lacus, in tempor urna. Nullam non odio in velit accumsan scelerisque. Nullam et ligula ut ante ultrices scelerisque. Cras ut augue ex.";
    p.id ="p";
    articleContent.appendChild(p);

  

}

export default pageLoad;



