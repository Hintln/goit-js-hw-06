// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".


const span = document.querySelector('#name-output');
const input = document.querySelector('#name-input');

function AddInput() {
    span.textContent = input.value;
    if (input.value === "") {
        span.textContent = 'Anonymous'
    }
}
input.addEventListener('input', AddInput);