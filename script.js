const hamburgerMenu = document.getElementById("hamburgermenu");
const colorMenu = document.getElementById("color_menu");
hamburgerMenu.addEventListener("click", showColorMenu);

const lis = colorMenu.getElementsByTagName("li");

for (let index = 0; index < lis.length; index++) {
  const element = lis[index];
  element.addEventListener("click", () => changeColorMenu(element.className));
}

function showColorMenu() {
  colorMenu.classList.toggle("hidden");
}

function hideColorMenu() {
  colorMenu.classList.add("hidden");
}

function changeColorMenu(selectedColorClass) {
  hideColorMenu();
  console.log(selectedColorClass);
  const body = document.getElementsByTagName("body")[0];
  body.className = "";
  body.classList.add(selectedColorClass);
}
