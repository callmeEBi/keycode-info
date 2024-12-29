let $ = document;
let mainContainer = $.querySelector(".main_container");
let mainNumber = $.querySelector(".main_number");
let box1 = $.querySelector(".box1");
let box2 = $.querySelector(".box2");
let box3 = $.querySelector(".box3");
let box4 = $.querySelector(".box4");
let h1Press = $.querySelector(".h1_press");

$.body.addEventListener("keydown", function (event) {
  h1Press.style.display = "none";
  mainContainer.style.display = "initial";
  mainNumber.innerHTML = event.which;
  box1.innerHTML = event.key;
  box2.innerHTML = event.location;
  box3.innerHTML = event.which;
  box4.innerHTML = event.code;
});
