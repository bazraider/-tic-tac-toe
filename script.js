const wins = [
[0, 1, 2], 
[3, 4, 5], 
[6, 7, 8], 
[0, 3, 6], 
[1, 4, 7], 
[2, 5, 8], 
[0, 4, 8], 
[2, 5, 6]];
const cells = document.querySelectorAll('.cell');
const podskazka = document.querySelectorAll('.podskazka');
let clicks = 0;
let arrayOfFreeCells = ['', '', '', '', '', '', '', '', ''];

//Cчётчик кликов в пределах поля
document.querySelector('.field').addEventListener('click', clickcount => {
  clicks += 1;
})

//Отображение подсказки в виде X или O - я не додумался как по другому решить вопрос с подсказкой в виде X или O, создал внутри ячейки ещё один div и при наведении внутренний див всплывает как подсказка, а при клике X или O ставятся в родительский div.
podskazka.forEach(word => word.addEventListener('mouseover', () => {
  if (clicks % 2 === 0) {
    word.innerHTML = 'X';
  } else word.innerHTML = 'O';
}))
     
podskazka.forEach(word => word.addEventListener('mouseout', () => {
  if (true) {
    word.innerHTML = '';
    }
}))

//Поочередно проставляем "X" и "O" на клик мышки и заполняем массив ходов крестиками и ноликами в зависимости от места установки на поле
cells.forEach(eachCell => eachCell.addEventListener('click', () => {
  if (clicks % 2 === 0) {
    eachCell.innerHTML = arrayOfFreeCells[eachCell.dataset.cell] = 'X';
    eachCell.style.pointerEvents='none';
  } else {
    eachCell.innerHTML = arrayOfFreeCells[eachCell.dataset.cell] = 'O';
    eachCell.style.pointerEvents='none';
  }
  console.log(arrayOfFreeCells);
}))

//Функция getComputedStyle позволяет получить значение любого CSS свойства элемента, даже из CSS файла. пример: let объект = getComputedStyle(элемент)
/* let check = getComputedStyle(document.body); */


//Проработать выигрышные вариации, при совпадении комбинации в массиве wins вывести alarm




/* //Меняем цвет при наведении мышкой на ячейку
cells.forEach(eachCell => eachCell.addEventListener('mouseover', () => {
  eachCell.setAttribute("style", ".cell:hover"); */

//Меняем цвет обратно на белый при уходе с ячейки
/* cells.forEach(eachCell => eachCell.addEventListener('mouseout', () => {
  eachCell.setAttribute("style", "background-color:white");
})); */


