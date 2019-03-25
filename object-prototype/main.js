'use strict'

// Задание №1

function initCheckBirthday() {

  const birthday = document.getElementById('birthday').value;

  const result = checkBirthday(birthday) ? "Да" : "Нет";

  document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {

  const now = +new Date(); // Переменная хранящая значение текущей даты в милисекундах

  const dayOfBirthday = +new Date(birthday); // Переменная хранящая значение даты рождения пользователя в милисекундах

  const diff = now - dayOfBirthday; // Переменная хранящая значение разницы между текущей датой и датой рождения пользователя в милисекундах

  const age = (diff / (365.25 * 24 * 60 * 60 * 1000)); // Переменная хранящая в качестве значения возраст пользователя

  return age >= 18 ? true : false;
}



// Задание №2

function initPrintAnimalSound() {
  const animal = {
    sound: 'grrrr',
  };

  const result = getAnimalSound(animal);

  document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
  const sound = Object.create(animal);
  return ((animal === undefined) ? null : sound.sound);
}


// Задание №3

function initCalculateStatement() {
  for (let idx = 0; idx < 3; idx++) {
    const marks = document.getElementById('learner-' + idx).value.split(',');

    const average = getAverageMark(marks);

    document.getElementById('learner-' + idx + '-average').innerHTML = average;
  }
}

function getAverageMark(marks) {

  const objMarks = []; // Инициализация пустого массива

  let sum = 0; // Переменная хранящая сумму всех оценок

  let roundedAverage = 0; // Переменная хранящая округленный средний балл ученика

  // Проходим циклом по массиву строк, преобразуем в массив чисел и считаем сумму всех чисел (оценок) массива

  for (let i = 0; i < marks.length; i++) {
    objMarks[i] = parseInt(marks[i], 10);
    sum += objMarks[i];
  }

  return roundedAverage = Math.round(sum / objMarks.length); // Возвращаем результат вычисления и округления средней оценки
}