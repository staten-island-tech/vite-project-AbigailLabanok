import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { cardArr } from "./array";
import {DOMSelectors} from "./DOM";

cardArr.forEach((el) => {
    console.log(el.name);
    DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class="display-card">
            <img class="display-img" src="${el.img}"/>
            <h2 class="display-name">${el.name}</h2>
            <h2 class="display-price">$${el.price}</h2>
        </div>`
    )
})

//use extra js and css files to have certain code in place where it will be more easily accessible
