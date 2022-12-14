// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента 
// (тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).




const listItem = document.querySelectorAll('.item');
console.log(`Число категорій: ${listItem.length}`);

listItem.forEach((item) => {
    console.log(`Категорія: ${item.firstElementChild.textContent}`);
    console.log(`Кількість елементів: ${item.lastElementChild.children.length}`);
});