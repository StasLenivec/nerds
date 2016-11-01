// querySelector() Метод для поиска элементов
// addEventListener() Метод для отлова событий
// classList Набор методов для управления классами
//preventDefault() отменяет действие по умолчанию
//на 60 мин.
var link = document.querySelector(".btn-write");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".modal-content-close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("write-us-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("write-us-show");
});