import pizzaImage from './imgs/pizza.jpg';

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
        console.log("in load of homepage");
        //Create div container for headline and the headline
        const headlineContainer = document.createElement("div");
        headlineContainer.className = "container";
        const headline = document.createElement("h1");
        headline.className = "headline";
        headline.innerHTML = "Ryan's Pizzeria";
        headlineContainer.appendChild(headline);
        content.appendChild(headlineContainer);

        const picContainer = document.createElement("div");
        picContainer.className = "container";
        const pic = document.createElement('img');
        pic.setAttribute('src', pizzaImage);
        pic.setAttribute('width', '100%');
        picContainer.appendChild(pic);
        content.appendChild(picContainer);


        const blurbContainer = document.createElement("div");
        blurbContainer.className = "container";
        const blurb = document.createElement("p");
        blurb.innerHTML = "Ryan's pizzeria has the greatest pizza in South Carolina. Come on down today to try for yourself. Satisfaction guaranteed or your money back!";
        blurbContainer.appendChild(blurb);
        content.appendChild(blurbContainer);

        const hoursContainer = document.createElement("div");
        hoursContainer.className = "container";
        const hoursHeader = document.createElement("h2");
        hoursHeader.innerHTML = "Hours";
        const hoursList = generateHoursList();
        hoursContainer.appendChild(hoursHeader);
        hoursContainer.appendChild(hoursList);
        content.appendChild(hoursContainer);


        

    }

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
    

})();

const contactPage = (() => {


})();


function tabSwitch(page){
    switch (page){
        case "home":
            homePage.load();
            break;
        case "menu":
            menuPage.load();
            break;
        case "contact":
            contactPage.load();
            break;
    }

}
homePage.load();
