// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.



const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', check)

function check() {
    if (event.currentTarget.value.length !== Number(event.currentTarget.dataset.length)) {
        event.currentTarget.classList.remove('valid')
        event.currentTarget.classList.add('invalid')
    }
    else {
        event.currentTarget.classList.remove('invalid')
        event.currentTarget.classList.add('valid')}
}