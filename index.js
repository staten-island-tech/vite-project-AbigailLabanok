const DOMSelectors = {
  button: document.querySelector(".btn"),
};

DOMSelectors.button.addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.add("warm");
  }
});
