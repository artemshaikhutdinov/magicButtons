// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener("click", () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь

  document.body.append(clonedBtn);
  clonedBtn.textContent = "Я изменю тебя";
  clonedBtn.style.fontSize = "15px";
  clonedBtn.style.fontWeight = "bold";
  clonedBtn.style.color = "white";
  clonedBtn.style.backgroundColor = "#a78b71";
  clonedBtn.style.padding = "19px 20px";
  clonedBtn.style.borderRadius = "5px";
  clonedBtn.style.border = "none";
});

// здесь можете создать EventListener для второй кнопки

clonedBtn.addEventListener("click", () => {
  btn.style.color = "black";
  btn.style.backgroundColor = "#9c4a1a";
});
