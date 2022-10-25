// Напиши скрипт, який змінює кольори фону елемента < body >
// через інлайн - стиль по кліку на button.change - color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}




const bodyRef = document.querySelector('body');
const spanRef = document.querySelector('.color');
const buttonRef = document.querySelector('.change-color');


buttonRef.addEventListener('click', (e) => {
  spanRef.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  bodyRef.style.backgroundColor = spanRef.textContent;
});


