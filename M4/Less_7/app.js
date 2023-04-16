// ⁡⁣⁢⁣​‌‌​‌‌‍‍Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach⁡⁡​​⁡

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Коллбек функції⁡​⁡
// Напишіть наступні функції:

// createProduct(obj, callback) - приймає об'єкт товару без id,
// а також коллбек. Функція створює новий об'єкт товару, додаючи йому
// унікальний ідентифікатор у властивість id та викликає коллбек передаючи
// йому створений об'єкт.

// logProduct(product) - функція приймаюча об'єкт продукту і логуюча його в консоль

// logTotalPrice(product) -  функція, що приймає об'єкт продукту і
// логіює загальну вартість товару в консоль

// // Рішення

// const createProduct = (obj, clb, clb2) => {
// 	const newObj = { ...obj }
// 	newObj.id = 'asd765123#@$%'
// 	clb(newObj)
// 	clb2(newObj)
// }

// const logProduct = (obj) => console.log(obj)

// const logTotalPrice = (obj) => console.log(obj.price * obj.quantity)

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct, logTotalPrice)
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice)

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Коллбек функції⁡​⁡
// Додайте в об'єкт account методи withdraw(amount, onSuccess, onError)
// та deposit(amount, onSuccess, onError), де перший параметр
// це сума операції, а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT
// або this.balance, і onSuccess в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT
// або менше або дорівнює нулю, і onSuccess в іншому випадку.

// Рішення

// const TRANSACTION_LIMIT = 1000

// const account = {
// 	username: 'Jacob',
// 	balance: 1400,
// }

// function handleSuccess(message) {
// 	console.log(`✅ Success! ${message}`)
// }

// function handleError(message) {
// 	console.log(`❌ Error! ${message}`)
// }

// // account.withdraw(2000, handleSuccess, handleError)
// // account.withdraw(1100, handleSuccess, handleError)
// // account.withdraw(300, handleSuccess, handleError)

// account.deposit(1700, handleSuccess, handleError)
// account.deposit(0, handleSuccess, handleError)
// account.deposit(-600, handleSuccess, handleError)
// account.deposit(600, handleSuccess, handleError)

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 3 - Коллбек функції⁡​⁡
// Напишіть функцію each(array, callback), яка першим параметром очікує масив,
// а другим - функцію, яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами якого будуть результати
// виклику коллбека.

// // Рішення

// function each(array, clb) {
// 	const newArr = []
// 	array.forEach(function (el, ind, arr) {
// 		// clb(el)
// 		const result = clb(el)
// 		newArr.push(result)
// 	})
// 	//     for (let i = 0; i < array.length; i++) {

// 	// newArr.push(clb(array[i]))

// 	//     }
// 	return newArr
// }

// // // ...
// console.log(
// 	each([64, 49, 36, 25, 16], function (value) {
// 		return value * 2
// 	})
// )

// console.log(
// 	each([64, 49, 36, 25, 16], function (value) {
// 		return value - 10
// 	})
// )
// console.log(
// 	each([64, 49, 36, 25, 16], function (value) {
// 		return Math.sqrt(value)
// 	})
// )
// console.log(
// 	each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
// 		return Math.ceil(value)
// 	})
// )
// console.log(
// 	each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
// 		return Math.floor(value)
// 	})
// )
// console.log(
// 	each(['Maxim', 'Alex', 'Anet'], function (value) {
// 		return value.toLowerCase()
// 	})
// )
// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁢⁢​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Стрілочні функції⁡​⁡
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const createProduct = (partialProduct, callback) =>
// 	callback({ id: Date.now(), ...partialProduct })

// const logProduct = (product) => console.log(product)

// const logTotalPrice = (product) => console.log(product.price * product.quantity)

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct)
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice)

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁢⁢​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 5 - Стрілочні функції⁡​⁡
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const TRANSACTION_LIMIT = 1000

// const account = {
// 	username: 'Jacob',
// 	balance: 400,

// 	withdraw: (amount, onSuccess, onError)  {
// 		if (amount > TRANSACTION_LIMIT) {
// 			onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`)
// 		} else if (amount > this.balance) {
// 			onError(`Amount can't exceed account balance of ${this.balance} credits`)
// 		} else {
// 			console.log('this>>', this)
// 			this.balance -= amount
// 			onSuccess(`Account balance: ${this.balance}`)
// 		}
// 	},
// 	deposit(amount, onSuccess, onError) {
// 		if (amount > TRANSACTION_LIMIT) {
// 			onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`)
// 		} else if (amount <= 0) {
// 			onError(`Amount must be more than 0 credits`)
// 		} else {
// 			console.log('this>>', this)
// 			this.balance += amount
// 			onSuccess(`Account balance: ${this.balance}`)
// 		}
// 	},
// }

// function handleSuccess  (message) { console.log(`✅ Success! ${message}`)}

// function handleError (message)  {console.log(`❌ Error! ${message}`)}

// account.withdraw(2000, handleSuccess, handleError)
// account.withdraw(600, handleSuccess, handleError)
// account.withdraw(300, handleSuccess, handleError)
// // account.deposit(1700, handleSuccess, handleError)
// // account.deposit(0, handleSuccess, handleError)
// // account.deposit(-600, handleSuccess, handleError)
// // account.deposit(600, handleSuccess, handleError)

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 6 - Інлайн стрілочні функції⁡​⁡
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// function each(array, callback) {
// 	const newArr = []
// 	for (const el of array) {
// 		newArr.push(callback(el))
// 	}
// 	return newArr
// }

// const each = (array, callback) => {
// 	const newArr = []
// 	for (const el of array) {
// 		newArr.push(callback(el))
// 	}
// 	return newArr
// }

// console.log(each([64, 49, 36, 25, 16], (value) => value * 2))
// console.log(each([64, 49, 36, 25, 16], (value) => value - 10))
// console.log(each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)))
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)))
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)))

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 7 - Метод forEach⁡​⁡
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function logItems (items)  {
// 	for (let i = 0; i < items.length; i += 1) {
// 		console.log(`${i + 1} - ${items[i]}`)
// 	}
// }

// logItems(['Mango', 'Poly', 'Ajax'])
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋'])

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 8 - Метод forEach⁡​⁡
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// const printContactsInfo = ({ names, phones }) => {
// 	const nameList = names.split(',')
// 	const phoneList = phones.split(',')

// 	for (let i = 0; i < nameList.length; i += 1) {
// console.log(`${nameList[i]}: ${phoneList[i]}`)
// 	}
// }

// printContactsInfo({
// 	names: 'Jacob,William,Solomon,Artemis',
// 	phones: '89001234567,89001112233,890055566377,890055566300',
// })

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁢⁢​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 9 - Метод forEach⁡​⁡
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function calculateAverage(...args) {
// 	let total = 0
// 	for (let i = 0; i < args.length; i++) {
// 		total += args[i]
// 	}
// 	return total / args.length
// }

// console.log(calculateAverage(1, 2, 3, 4)) // 2.5
// console.log(calculateAverage(14, 8, 2)) // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)) // 23.2

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// #callback
// #inline callback
// #forEach
// #arrow function
// #implicit return
// #arguments
// #arrow callback function

// function fn(a) {
//     return a+10
// }

// function fn1(number) {
// 	console.log(number)
// }

// const y = fn(10)
// const x = fn1(y)

// function addFive(number, number2, operator) {
// 	number = number ** 2

// 	// return clb(number, number2)
// 	if (operator === '+') {
// 		return number + number2
// 	} else if (operator === '-') {
// 		return number - number2
// 	} else if (operator === '**') {
// 		return number ** number2
// 	}
// }

// console.log(
// 	addFive(10, 100, function (number, number2) {
// 		return number + number2
// 	})
// )
// ;(number2 + number) / 2

// addFive(10, 100, '-')

// addFive(12, 13, '**')

// addFive(15,9,)

// console.log(
// 	addFive(100, 130, function (number, number2) {
// 		return number / number2
// 	})
// )

// addFive(12, 13, function (number, number2) {
// 	return (number2 + number) / 2
// })

// console.log(
// 	addFive(10, function (number) {
// 		return number + 5
// 	})
// )

// console.log(
// 	addFive(10, function (number) {
// 		return number + 123
// 	})
// )

// console.log(
// 	addFive(10, function (number) {
// 		return number - 300
// 	})
// )

// const arr = ['Alex', 'Bob', 'Jon']
// const arr2 = []
// for (let i = 0; i < arr.length; i++) {
// 	arr[i] = arr[i].toUpperCase()
// }

// function fEach(clb, arr) {
// for (let i = 0; i < arr.length; i++) {
// 	const el = arr[i]
// 	const index = i
// 	const array = arr
// 	clb(el, index, array)
// }
//     return undefined
// }

// arr.forEach(function (el, ind, ar) {
// 	// ar.sort
// })

// console.log(arr)
// console.log(arr2)
// const result = arr.slice(1,3)

// console.log('arr :>> ', arr)

// function fn(a) {
//     console.log(a);
// }

// fn(1,2,3,4,5,6)

// function fn(a) {
// 	return a + 2
// }

// const fn2 = function (a) {
// 	return a + 2
// }

// const fn3 = (a) => a + 2

// const arr = ['Alex', 'Bob', 'Jon']

// arr.forEach((el) => console.log(el))
