import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { cardArr } from "./array";
import { DOMSelectors } from "./DOM";

cardArr.forEach((el) => {
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<div class="display-card class="one">
         <img class="display-img" src="${el.img}"/>
         <h2 class="display-name">${el.name}</h2>
         <h3 class="display-price">${el.price}</h3>
      </div>`
  );
});

DOMSelectors.blueBtn.addEventListener("click", blue);

DOMSelectors.purpleBtn.addEventListener("click", purple);

DOMSelectors.allBtn.addEventListener("click", all);

function blue() {
  DOMSelectors.display.innerHTML = "";

  if (
    document.body.classList.contains("regularColor") ||
    document.body.classList.contains("purpleColor") ||
    document.body.classList.contains("blueColor")
  ) {
    document.body.classList.add("blueColor");
    document.body.classList.remove("regularColor");
    document.body.classList.remove("purpleColor");
  } else {
    document.body.classList.add("regularColor");
    document.body.classList.add("blueColor");
    document.body.classList.add("purpleColor");
  }

/*   DOMSelectors.display.style.display = "none"; */
DOMSelectors.display.innerHTML = "";

  cardArr
    .filter((card) => card.mainColor.includes("blue"))
    .forEach((el) => {
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class="display-card class="one">
         <img class="display-img" src="${el.img}"/>
         <h2 class="display-name">${el.name}</h2>
         <h3 class="display-price">${el.price}</h3>
      </div>`
      );
    });
}

function purple() {
  DOMSelectors.display.innerHTML = "";

  if (
    document.body.classList.contains("regularColor") ||
    document.body.classList.contains("blueColor") ||
    document.body.classList.contains("purpleColor")
  ) {
    document.body.classList.add("purpleColor");
    document.body.classList.remove("regularColor");
    document.body.classList.remove("blueColor");
  } else {
    document.body.classList.add("regularColor");
    document.body.classList.add("purpleColor");
    document.body.classList.add("blueColor");
  }

/*   DOMSelectors.display.style.display = "none"; */

  cardArr
    .filter((card) => card.mainColor.includes("purple"))
    .forEach((el) => {
      DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class="display-card class="one">
         <img class="display-img" src="${el.img}"/>
         <h2 class="display-name">${el.name}</h2>
         <h3 class="display-price">${el.price}</h3>
      </div>`
      );
    });
}

function all() {
  DOMSelectors.display.innerHTML = "";

  if (
    document.body.classList.contains("purpleColor") ||
    document.body.classList.contains("blueColor") ||
    document.body.classList.contains("regularColor")
  ) {
    document.body.classList.add("regularColor");
    document.body.classList.remove("purpleColor");
    document.body.classList.remove("blueColor");
  } else {
    document.body.classList.add("regularColor");
  }

/*   DOMSelectors.display.style.display = "none"; */
 
  DOMSelectors
  cardArr.forEach((el) => {
    DOMSelectors.display.insertAdjacentHTML(
      "beforeend",
      `<div class="display-card class="one">
         <img class="display-img" src="${el.img}"/>
         <h2 class="display-name">${el.name}</h2>
         <h3 class="display-price">${el.price}</h3>
      </div>`
    );
  });
};

//use extra js and css files to have certain code in place where it will be more easily accessible
