// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.




const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    }
}

const incrementBtm = document.querySelector('button[data-action = "increment"]');
const decrementBtm = document.querySelector('button[data-action = "decrement"]');
const valueEl = document.querySelector('span');

incrementBtm.addEventListener('click', function () {
    counterValue.increment();
    valueEl.textContent = counterValue.value
})

decrementBtm.addEventListener('click', function () {
    counterValue.decrement();
    valueEl.textContent = counterValue.value
})