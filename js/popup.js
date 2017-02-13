var link = document.querySelector(".interest__btn--showform");
var popup = document.querySelector(".form");
var close = document.querySelector(".interest__btn--showform");

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("form-no-show");
});

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("form");
});
