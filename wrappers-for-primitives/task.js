'use script'

// Задание №1

function calculateMortgage() {
  let percent = window.percent.value;
  let contribution = window.contribution.value;
  let amount = window.amount.value;
  let date = window.date.value;

  let result = calculateTotalMortgage(percent, contribution, amount, date);
  let span = window.mortageResult;
  span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  const creditTerms = []; // Инициализация пустого массива

  // Проверка циклом на корректность введенных данных
  for (let i = 0; i < arguments.length - 1; i++) {
    creditTerms[i] = parseInt(arguments[i], 10);
    if (isNaN(arguments[i])) {
      return `Параметр ${i + 1} содержит не правильное значение ${arguments[i]}`;
    }
  }
  const S = amount - contribution; // Переменная хранящая сумму, которую необходимо вернуть банку
  const P = (percent / 100) / 12; // Переменная хранящая размер процентной ставки
  const currentDate = new Date(); // Переменная хранящая текущую дату
  const endOfCredit = new Date(date); // Переменная хранящая значение даты окончания кредита
  const n = ((endOfCredit.getMonth() - currentDate.getMonth()) + (12 * (endOfCredit.getFullYear() - currentDate.getFullYear()))); // Коли-во месяцев кредита
  const payment = S * (P + P / (((1 + P) ** n) - 1)); // Переменная хранащая сумму ежемесячного платежа
  const totalAmount = (n * payment).toFixed(2); // Общая сумма к оплате
  return totalAmount;
}


// Задание №2

function sayHello() {
  let name = window.personName.value;
  let greeting = getGreeting(name);
  let span = window.helloResult;
  span.textContent = greeting;
}

function getGreeting(name) {
  if (name == 'undefined' || name == 'null') {
    name = 'Аноним';
    console.log(`Привет, мир! Меня зовут ${name}`);
    return `Привет, мир! Меня зовут ${name}`
  } else if (name == Number(name)) {
    name = 'Аноним'
    console.log(`Привет, мир! Меня зовут ${name}`);
    return `Привет, мир! Меня зовут ${name}`
  } else {
    console.log(`Привет, мир! Меня зовут ${name}`);
    return `Привет, мир! Меня зовут ${name}`
  }
}   