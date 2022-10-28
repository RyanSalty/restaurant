import pizzaImage from './imgs/pizza.jpg';
import cheesePizzaPic from './imgs/cheese.jpg';
import pepPizzaPic from './imgs/pep.jpg';
import meatPizzaPic from './imgs/meat.jpg';




const firstLoad = (() => {

    const load = () => {
        homePage.load();
    }

    return{
        load,
    }

})();

const homePage = (() => {

    const content = document.getElementById("content");

    const load = () => {

        console.log("in home load");
        //Create div container for headline and the headline
        const headlineContainer = document.createElement("div");
        headlineContainer.className = "container";
        const headline = document.createElement("h1");
        headline.className = "headline";
        headline.innerHTML = "Ryan's Pizzeria";
        headlineContainer.appendChild(headline);
        content.appendChild(headlineContainer);

        //Create div container for picture and the picture
        const picContainer = document.createElement("div");
        picContainer.className = "container";
        const pic = document.createElement('img');
        pic.setAttribute('src', pizzaImage);
        pic.setAttribute('width', '100%');
        picContainer.appendChild(pic);
        content.appendChild(picContainer);

        //Create div container for blurb and the blurb
        const blurbContainer = document.createElement("div");
        blurbContainer.className = "container";
        const blurb = document.createElement("p");
        blurb.innerHTML = "Ryan's pizzeria has the greatest pizza in South Carolina. Come on down today to try for yourself. Satisfaction guaranteed or your money back!";
        blurbContainer.appendChild(blurb);
        content.appendChild(blurbContainer);


        //Create div container for the hours and the list of hours
        const hoursContainer = document.createElement("div");
        hoursContainer.className = "container";
        const hoursHeader = document.createElement("h2");
        hoursHeader.innerHTML = "Hours";
        const hoursList = generateHoursList();
        hoursContainer.appendChild(hoursHeader);
        hoursContainer.appendChild(hoursList);
        content.appendChild(hoursContainer);


        

    }

    //Generates a list element based on array of times and returns it
    const generateHoursList = () => {
        const hoursList = document.createElement("ul");
        const hours = ["Monday: 8am - 5pm",
                        "Tuesday: 8am - 10pm",
                        "Wednesday: 8am - 10pm",
                        "Thursday: 8am - 10pm",
                        "Friday: 8am - 12am",
                        "Saturday: 8am - 10pm",
                        "Sunday: Closed"];
        
        for (let i = 0; i < hours.length; ++i){
            let li = document.createElement('li');
            li.innerHTML = hours[i];
            hoursList.appendChild(li);
        }

        return hoursList;

    }

    return{
        load,
    }

})();

const menuPage = (() => {

    

    const load = () => {
        console.log("in menu load");
        //Create div container for headline and the headline
        const headlineContainer = document.createElement("div");
        headlineContainer.className = "container";
        const headline = document.createElement("h1");
        headline.className = "headline";
        headline.innerHTML = "Menu";
        headlineContainer.appendChild(headline);
        content.appendChild(headlineContainer);

        const cheesePizza = newItem('Cheese Pizza',
            'Handmade dough and tomato sauce with a blend of mozzarella and parmesan cheese',
            '$12',
            cheesePizzaPic);
        const pepPizza = newItem('Pepperoni Pizza',
            'Handmade dough and tomato sauce with a blend of mozzarella and parmesan cheese, topped with pepperoni',
            '$14',
            pepPizzaPic);
        const meatPizza = newItem('Cheese Pizza',
            'Handmade dough and tomato sauce with a blend of mozzarella and parmesan cheese, topped with perpperoni, sausage and bacon',
            '$16',
            meatPizzaPic);

        content.appendChild(cheesePizza);
        content.appendChild(pepPizza);
        content.appendChild(meatPizza);
    }

    const newItem = (name, desc, price, pic) => {
        const itemContainer = document.createElement("div");
        itemContainer.className = "container";
        const itemName = document.createElement("h3");
        itemName.innerHTML = name;
        const itemDesc = document.createElement("p");
        itemDesc.innerHTML = desc;
        const itemPrice = document.createElement("h4");
        itemPrice.innerHTML = price;
        const itemPic = document.createElement("img");
        itemPic.setAttribute('src', pic);
        itemPic.setAttribute('width', '100%');
        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemDesc);
        itemContainer.appendChild(itemPic);
        itemContainer.appendChild(itemPrice);

        return itemContainer;

    }

    return{
        load,
    }



    

})();


const contactPage = (() => {

    

    const load = () => {
        //Create header container and header
        const headlineContainer = document.createElement("div");
        headlineContainer.className = "container";
        const headline = document.createElement("h1");
        headline.className = "headline";
        headline.innerHTML = "Contact Us";
        headlineContainer.appendChild(headline);
        content.appendChild(headlineContainer);

        //Create div container for phone and email
        const contactContainer = document.createElement("div");
        contactContainer.className = "container";
        const contactHeader = document.createElement("h2");
        contactHeader.innerHTML = "Contact Info"
        const contactInfo = document.createElement("p");
        contactInfo.innerHTML = "<strong>Tel:</strong>555-555-5555</br><strong>Email:</strong>fakeemail@email.com";
        contactContainer.appendChild(contactHeader);
        contactContainer.appendChild(contactInfo);
        content.appendChild(contactContainer);

        //Create div container for address
        const addressContainer = document.createElement("div");
        addressContainer.className = "container";
        const addressHeader = document.createElement("h2");
        addressHeader.innerHTML = "Address Info"
        const addressInfo = document.createElement("p");
        addressInfo.innerHTML = "555 Fake St.</br>Fake Town, FK, 55555";
        addressContainer.appendChild(addressHeader);
        addressContainer.appendChild(addressInfo);
        content.appendChild(addressContainer);
        




    }


    return {
        load,
    }


})();



function tabSwitch(e){
    console.log("in switch");
    let page = e.target.id;
    console.log(page);
    switch (page){
        case "tab-home":
            content.innerHTML = '';
            homePage.load();
            break;
        case "tab-menu":
            content.innerHTML = '';
            menuPage.load();
            break;
        case "tab-contact":
            content.innerHTML = '';
            contactPage.load();
            break;
    }

}

homePage.load();
document.getElementById('tab-home').addEventListener('click', tabSwitch);
document.getElementById('tab-menu').addEventListener('click', tabSwitch);
document.getElementById('tab-contact').addEventListener('click', tabSwitch);
