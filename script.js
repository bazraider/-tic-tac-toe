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

/* 
Отображение подсказки в виде "X" или "O" - я не додумался как по другому решить вопрос с подсказкой в виде X или O, создал внутри ячейки ещё один div и при наведении внутренний див всплывает как подсказка, а при клике X или O ставятся в родительский div. 
*/
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

/* 
1. Поочередно проставляем "X" и "O" на клик мышки и 
2. Заполняем массив ходов крестиками и ноликами в зависимости от места установки на поле
3. Cчётчик кликов 
 */
cells.forEach(eachCell => eachCell.addEventListener('click', () => {
  if (clicks % 2 === 0) {
    eachCell.innerHTML = arrayOfFreeCells[eachCell.dataset.cell] = 'X';
    clicks += 1;
    eachCell.style.pointerEvents='none';
  } else {
    eachCell.innerHTML = arrayOfFreeCells[eachCell.dataset.cell] = 'O';
    clicks += 1;
    eachCell.style.pointerEvents='none';
  }
  console.log(arrayOfFreeCells);
}))

//Счётчик кликов первый. Не корректно работал, т.к. можно было 2 раза нажать на одну ячейку и сменить очередь хода
/* document.querySelector('.field').addEventListener('click', clickcount => {
  clicks += 1;
  console.log(clicks);
}) */

//Функция getComputedStyle позволяет получить значение любого CSS свойства элемента, даже из CSS файла. пример: let объект = getComputedStyle(элемент)
/* let check = getComputedStyle(document.body); */


//Проработать выигрышные вариации, при совпадении комбинации в массиве wins вывести alarm

//Надо сделать чтобы деактивированные поля не входили в область field потому что по клику на них сменяется очередь и нарушается порядок хода


/* //Меняем цвет при наведении мышкой на ячейку
cells.forEach(eachCell => eachCell.addEventListener('mouseover', () => {
  eachCell.setAttribute("style", ".cell:hover"); */

//Меняем цвет обратно на белый при уходе с ячейки
/* cells.forEach(eachCell => eachCell.addEventListener('mouseout', () => {
  eachCell.setAttribute("style", "background-color:white");
})); */


