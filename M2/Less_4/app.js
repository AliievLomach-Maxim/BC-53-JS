// ⁡⁣⁢⁣​‌​‌‌​‌‌‍‍Модуль 2. Заняття 4. Функції⁡⁡​​⁡

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁢⁢​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Індекс маси тіла⁡​⁡

// Напиши функцію calcBMI(weight, height) яка розраховує та повертає
// індекс маси тіла людини.
// Для цього необхідно розділити вагу в
// кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки.
// Не цілі числа можуть бути задані у вигляді 24.7 або 24,7,
// тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// const weight = prompt('Input your weight:')
// const height = prompt('Input your height:')

// const weight = '24,7'
// const height = '1.2'

// function calcBMI(weight, height) {
// 	return Math.floor(
// 		Number(weight.replace(',', '.')) /
// 			Math.pow(Number(height.replace(',', '.')), 2)
// 	)
// }

// const bmi = calcBMI(weight, height)
// console.log(bmi)

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁢⁢​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Найменше з чисел⁡​⁡
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// function min(a, b) {
//
// }

// console.log(min(2, 5)) // 2
// console.log(min(3, -1)) // -1
// console.log(min(1, 1)) // 1

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟯 - Площа прямокутника⁡​⁡
// Напиши функцію getRectArea(dimensions) для обчислення площі
// прямокутника зі сторонами, значення яких будуть передані до
// параметра dimensions у вигляді рядка.
// Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
// 	const splitGetRect = dimensions.split(' ')
// 	return splitGetRect[0] * splitGetRect[1]
// }

// console.log(getRectArea('5 12'))
// console.log(getRectArea('13 24'))

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Логування елементів⁡​⁡
// Напиши функцію logItems(items), яка отримує масив та використовує
// цикл for, який для кожного елемента масиву буде виводити в консоль
// повідомлення у форматі <номер елемента> - <значення елемента>.
// Нумерація елементів повинна починатися з 1.

// logItems(['Mango', 'Poly', 'Ajax'])
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋'])

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟱 - Логування контактів⁡​⁡
// Напиши функцію printContactsInfo(names, phones) яка виводить у консоль
// ім'я та телефонний номер користувача. У параметри names та phones
// будуть передані рядки імен та телефонних номерів, розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакова.

// printContactsInfo(
// 	'Jacob,William,Solomon,Artemis',
// 	'89001234567,89001112233,890055566377,890055566300'
// )

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟲 - Пошук найбільшого елемента⁡​⁡
// Напиши функцію findLargestNumber(numbers)яка шукає найбільше
// число в масиві.

// function findLargestNumber(numbers) {
// 	return Math.max(...numbers)
// }

// function findLargestNumber(numbers) {
// 	let max = numbers[0]
// 	for (let i = 0; i < numbers.length; i++) {
// 		if (numbers[i] > max) {
// 			max = numbers[i]
// 		}
// 	}
// 	return max
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])) // 94
// console.log(findLargestNumber([49, 4, 7, 12])) // 83

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟳 - Середнє значення⁡​⁡
// Напишіть функцію calAverage() яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення. Усі аргументи будуть
// лише числами.

// console.log(calAverage(1, 2, 3, 4)) // 2.5
// console.log(calAverage(14, 8, 2)) // 8
// console.log(calAverage(27, 43, 2, 8)) // 23.2

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟴 - Форматування часу⁡​⁡
// Напиши функцію formatTime(minutes) яка переведе значення minutes
// (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

// function formatTime(minutes) {
// 	// 1 - get h
// 	// 2 - get m
// 	// 3 - ceate str time
// 	// let hours = Math.floor(minutes / 60)
// 	// let min = minutes % 60
// 	// if (hours < 10) {
// 	// 	hours = '0' + hours
// 	// }
// 	// if (min < 10) {
// 	// 	min = '0' + min
// 	// }
// 	// return `${hours}:${min}`
// 	const hours =
// 		Math.floor(minutes / 60) === 24 ? '00' : Math.floor(minutes / 60)
// 	const min = minutes % 60
// 	// return `${hours < 10 ? '0' + hours : hours}:${min < 10 ? '0' + min : min}`
// 	return `${hours.toString().padStart(2, '0')}:${min
// 		.toString()
// 		.padStart(2, '0')}`
// }

// console.log(formatTime(70)) // "01:10"
// console.log(formatTime(450)) // "07:30"
// console.log(formatTime(1441)) // "24:01"

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ​‌‍‌⁡⁢⁣⁣⁡⁢⁢⁢‍‍𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟵 - Колекція курсів (𝗶𝗻𝗰𝗹𝘂𝗱𝗲𝘀, 𝗶𝗻𝗱𝗲𝘅𝗢𝗳, 𝗽𝘂𝘀𝗵 і т. д.)​⁡
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL']

// function addCourse(name) {
// if (courses.includes(name)) {
// 		// console.log('Вже існує курс з таким імʼям')
// 		return 'Вже існує курс з таким імʼям'
// 	} else courses.push(name)
// }

// function removeCourse(name) {
// 	if (courses.includes(name)) {
// 		const index = courses.indexOf(name)
// 		courses.splice(index, 1)
// 	} else {
// 		console.log('Курс з таким імʼям не існує')
// 	}
// }

// function updateCourse(oldName, newName) {
// 	if (courses.includes(oldName)) {
// 		const index = courses.indexOf(oldName)
// 		courses.splice(index, 1, newName)
// 	} else {
// 		console.log('Курс з таким імʼям не існує')
// 	}
// }

// console.log(courses) // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS') // 'У вас уже є такой курс'
// console.log('t :>> ', addCourse('CSS'))

// removeCourse('React')
// console.log(courses) // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue') // 'Курс с таким імʼям не існує'

// updateCourse('Vue', 'NestJS')
// console.log(courses) // ['NestJS', 'CSS', 'JavaScript', 'PostgreSQL',]

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡
// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡
// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// function getSum(a, b) {
// 	const sum = a+b
// 	console.log(sum)
// 	// console.log('c :>> ', c)
// }

// getSum(100)

// function getSum(number1, number2) {
// 	const result = number1 + number2
// 	return result
// }

// const result = getSum(12, 113)

// console.log('result :>> ', result)
// const arr = [1,2,3]

// // const result = arr.slice(1,2)

// const x = 100

// if (a > b) {
// 	// const x = 10
// 	console.log(x)
// }
// const newArr = [1, 2, 3]

// function fn(array) {
// 	// const array = newArr
// 	for (let i = 0; i < array.length; i++) {
// 		array[i] += 10
// 	}
// }

// fn(newArr)

// console.log('newArr :>> ', newArr)

// function fn(params) {
// }

// const array = [1, 2, 3]

// const fn = function (a, b, c) {
// 	for (let index = 0; index < array.length; index++) {
// 		array[index] = array[index] + 1
// 	}
// 	return array
// }

// fn()
// // const result = fn()
// // console.log('fn :>> ', fn())
// // console.log('result :>> ', result)
// console.log('array :>> ', array)

// const number1 = 10
// const number2 = 100
// // const result = number1 + number2
// // console.log('result :>> ', result)

// const number3 = 200

// // const result2 = number1 + number2
// // console.log('result2 :>> ', result2)

// function getSum(a, b) {
// 	return a + b
// }

// const result1 = getSum(number1, number2)
// const result2 = getSum(number1, number3)

// const number4 = 1202

// const result3 = getSum(number3, number4)

// const number1 = 10
// const number2 = 100
// const number3 = 200
// const number4 = 1202

// function getSum() {
// 	let total = 0
// 	for (let i = 0; i < arguments.length; i++) {
// 		total += arguments[i]
// 	}
// 	return total
// 	const arr = Array.from(arguments)
// 	console.log('arr :>> ', arr)
// }

// // const result1 = getSum(number1, number2)
// // const result2 = getSum(number1, number3, number4)
// const result3 = getSum(number3, number4, number1, number2)

// // console.log('result1 :>> ', result1)
// // console.log('result2 :>> ', result2)
// console.log('result3 :>> ', result3)

// const arr = [1, 2, 3]

// for (const iterator of arr) {
// 	console.log('iterator :>> ', iterator + 1)
// }

// console.log('iterator :>> ', iterator)

// function fn(a, b) {
// 	let result
// 	if (a > b) {
// 		result = a
// 	} else if (a < b) {
// 		result = b
// 	}
// 	return result
// }

// function fn(a, b) {
// 	if (a > b) {
// 		return a
// 	}
// 	if (a < b) {
// 		return b
// 	}
// 	return 'вони рівні'
// }

// const result = fn(100, 1010)

// console.log('result :>> ', result)

// function fn1() {
// 	const result = 10 + 20
// 	const total = fn2()

// 	console.log('result fn1 :>> ', result + total)
// }

// function fn2() {
// 	const result = 100 + 2
// 	fn3()
// 	return result
// }

// function fn3() {
// 	const result = 100 + 2
// 	console.log('result3 :>> ', result)
// 	return result
// }
// fn1()
