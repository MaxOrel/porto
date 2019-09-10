"use strict";

let contributersButon = document.querySelector("#toggle-contributers");
let contributers = document.querySelector(".contributers__list");

contributersButon.addEventListener("click", function() {
  contributers.classList.toggle("contributers__list--hide");
});
