// Задание №1. Корни квадратного уравнения

//Функция №1 

function getSolution(a,b,c) {
	let D = b * b - 4 * a * c; // Формула дискриминанта
	let x1, x2; // Инициализация переменных хранящих значение формул для вычисления корней уравнения
	if (D > 0) {
		return {roots: [x1 = (-b + Math.sqrt(D)) / (2 * a), x2 = (-b - Math.sqrt(D)) / (2 * a)], D: D};
	} else if (D == 0) {
		return {roots: [x1 = -b / (2 * a)], D: D};
	} else if (D < 0) {
		return {D: D};
	}
}

// //Функция №2

function showSolutionsMessage(a,b,c){
	let result = getSolution(a,b,c); // Переменная хранящая результат работы функции getSolution(a,b,c)
	console.log(`Вычисляем корни квадратного уравнения: ${a}x^2 + ${b}x + ${c} = 0`);
	console.log(`Значение дискриминанта: ${result.D}`);

	// Проверка значений дискриминанта
	if (result.D > 0) {
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	} else if (result.D == 0) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
	} else if (result.D < 0) {
		console.log('Уравнение не имеет вещественных корней');
	}
}

showSolutionsMessage(1,2,3);
showSolutionsMessage(7,20,-3);
showSolutionsMessage(2,4,2);


// Задание №2 (Расшифровка данных)

// Ещё один вариант проверки данных

/*function getPerson(secretName) {
	let secretData;
	if (secretName === 1) {
		secretData = 'Эмильо';
	} else if (secretName === 0) {
		secretData = 'Родриго';
	}
	return secretData; 
}*/

function getPerson(secretName) {
	let secretData = secretName ? 'Эмильо' : 'Родриго'; 
	return secretData; 
}

function getPersonData(secretData) {
	return {
		firstName: getPerson(secretData.aaa),
		lastName: getPerson(secretData.bbb)
	}
}

console.log(getPersonData( {aaa: 0, bbb: 0} ));
console.log(getPersonData( {aaa: 1, bbb: 0} ));
console.log(getPersonData( {aaa: 0, bbb: 1} ));
console.log(getPersonData( {aaa: 1, bbb: 1} ));


// Задание №3

// Объект хранящий данные об оценках ученика

let data = {
  algebra: [2,4,5,2,3,4],
  geometry: [2,4,5],
  // russian: [3,3,4,5],
  // physics: [5,5],
  // music: [2,2,6],
  // english: [4,4,3],
  // poetry: [5,3,4],
  // chemistry: [2],
  // french: [4,4],
};

// Функция которая вычисляет среднее значение массива

function getAveregeValue(value) {
	let sum = 0;
	for (let i = 0; i < value.length; i++) {
		sum += value[i];
	}
	return sum / value.length;
}


function getAverageScore(data) {
	let objectMarks = {}; // Инициализация пустого объекта
	let arrayMarks = []; // Инициализация пустого массива

	// Обходим объект циклом и каждому свойству объекта (предмету) присваиваем значение средней оценки по этому предмету
	for (let key in data) {
		objectMarks[key] = getAveregeValue(data[key]); 
		arrayMarks.push(objectMarks[key]);
	}
	let average = getAveregeValue(arrayMarks); // Переменная хранящая среднюю оценку по всем предметам
	objectMarks.average = average;
	return objectMarks;
}

let studentGrades = getAverageScore(data); 
console.log(studentGrades);


