const squares = document.querySelectorAll(".square");

squares.forEach(square => {
  square.addEventListener("click", function () {
    const answer = square.querySelector(".answer");
    const icon = square.querySelector(".line img");
    answer.classList.toggle("active");
    icon.src = answer.classList.contains("active")
      ? "/assets/images/icon-minus.svg"
      : "/assets/images/icon-plus.svg";
  });
});