const wins = [
[0, 1, 2], 
[3, 4, 5], 
[6, 7, 8], 
[0, 3, 6], 
[1, 4, 7], 
[2, 5, 8], 
[0, 4, 8],
[2, 4, 6], 
[2, 5, 6]];
const cells = document.querySelectorAll('.cell');
const podskazka = document.querySelectorAll('.podskazka');
let clicks = 0;
let arrayOfFreeCells = ['', '', '', '', '', '', '', '', ''];
const audio = document.querySelector('#audio');

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

cells.forEach(eachCell => eachCell.addEventListener('click', () => {
  if (clicks % 2 === 0) {
    eachCell.innerHTML = arrayOfFreeCells[eachCell.dataset.cell] = 'X'; /* Поочередно проставляем "X" и "O" на клик мышки и Заполняем массив ходов крестиками и ноликами в зависимости от места установки на поле.*/
    audio.currentTime = 0;
    audio.play();
    clicks += 1; //Cчётчик кликов.
    eachCell.style.pointerEvents='none';//Деактивируем поле стилем pointerEvents если в нём стоит Крестик или Нолик.
    xoInArrayWins();
  } else {
    eachCell.innerHTML = arrayOfFreeCells[eachCell.dataset.cell] = 'O'; /* Поочередно проставляем "X" и "O" на клик мышки и Заполняем массив ходов крестиками и ноликами в зависимости от места установки на поле.*/
    audio.currentTime = 0;
    audio.play();
    clicks += 1; //Cчётчик кликов.
    eachCell.style.pointerEvents='none';//Деактивируем поле стилем pointerEvents если в нём стоит Крестик или Нолик.
    xoInArrayWins();
  }
}))

//Определяем номера ячеек где поставлен "Х"
function locatedOfX(arr) {
  let polozhenieX = [];  
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === 'X') {
        polozhenieX.push(i);
      } 
    }
  return polozhenieX;
}

//Определяем номера ячеек где поставлен "O"
function locatedOfO(arr) {
  let polozhenieO = [];  
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === 'O') {
        polozhenieO.push(i);
      } 
    }
  return polozhenieO;
}

//Функция определяющая массив с проставленными 'X' и 'O' на места соотвествующие номерам в polozhenieX и polozhenieO
function xoInArrayWins() {
  let winsClone = wins;
  for (let row of winsClone) {
    for (let j = 0; j < row.length; j++) {
      if (locatedOfO(arrayOfFreeCells).includes(row[j])) {
        row[j] = 'O';
      } else if (locatedOfX(arrayOfFreeCells).includes(row[j])) {
        row[j] = 'X';
      }
    }
  }
  //Переводим получившийся массив в строку
  let include_X_O = JSON.stringify(winsClone);
  let additionalStr = '';
  for (let j = 0; j < include_X_O.length; j++) {
    if (include_X_O[j] === '"') {
      continue;
    } else additionalStr += include_X_O[j];
  }

  //Ищем там совпадение на [X,X,X] или [O,O,O]. Если комбинация является выигрышным вариантом, то выводим диалоговое окно с кнопкой рестарт
  if (additionalStr.includes('[X,X,X]') || additionalStr.includes('[O,O,O]')) {
    document.querySelector('dialog').show();
  } else if (clicks === 9) { //Вариант на ничью
    document.querySelector('dialog > h1').innerHTML = "Ничья!";
    document.querySelector('dialog').show();
  }  
};

//Слушатель на кнопку и перезагрузка страницы
document.querySelector('.restart').addEventListener('click', reset);
function reset() {
  location.reload();
}
