// Напиши скрипт, який змінює кольори фону елемента < body >
// через інлайн - стиль по кліку на button.change - color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const backgroundColor = document.querySelector('body');
const changeColorBtm = document.querySelector('.change-color');
const textColor = document.querySelector('.color');


changeColorBtm.addEventListener('click', changeColor)

function changeColor() {
  textColor.textContent = getRandomHexColor()
  backgroundColor.style.background = `${getRandomHexColor()}`

}
console.log(getRandomHexColor())
