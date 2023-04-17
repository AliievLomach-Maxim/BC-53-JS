//  ​‌‌​‌‌‍⁡⁣⁢⁣‍Модуль 𝟰. Заняття 𝟴. Перебираючі методи масиву⁡​​

// ​‌‍‌⁡⁢⁢⁢Колекція об'єктів для всіх прикладів з автомобілями⁡​
const cars = [
	{
		make: 'Honda',
		model: 'CR-V',
		type: 'suv',
		amount: 14,
		price: 24045,
		onSale: true,
	},
	{
		make: 'Honda',
		model: 'Accord',
		type: 'sedan',
		amount: 2,
		price: 22455,
		onSale: true,
	},
	{
		make: 'Mazda',
		model: 'Mazda 6',
		type: 'sedan',
		amount: 8,
		price: 24195,
		onSale: false,
	},
	{
		make: 'Mazda',
		model: 'CX-9',
		type: 'suv',
		amount: 7,
		price: 31520,
		onSale: true,
	},
	{
		make: 'Toyota',
		model: '4Runner',
		type: 'suv',
		amount: 19,
		price: 34210,
		onSale: false,
	},
	{
		make: 'Toyota',
		model: 'Sequoia',
		type: 'suv',
		amount: 16,
		price: 45560,
		onSale: false,
	},
	{
		make: 'Toyota',
		model: 'Tacoma',
		type: 'truck',
		amount: 4,
		price: 24320,
		onSale: true,
	},
	{
		make: 'Ford',
		model: 'F-150',
		type: 'truck',
		amount: 11,
		price: 27110,
		onSale: true,
	},
	{
		make: 'Ford',
		model: 'Fusion',
		type: 'sedan',
		amount: 13,
		price: 22120,
		onSale: true,
	},
	{
		make: 'Ford',
		model: 'Explorer',
		type: 'suv',
		amount: 6,
		price: 31660,
		onSale: false,
	},
]
// ⁡⁢⁢⁢____________________________________________________________________________________________________________________________________
// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Метод 𝗺𝗮𝗽⁡​⁡
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// const result = cars.map((car) => {
// 	return car.model
// })
// console.log('result :>> ', result)
// console.table(getModels(cars))

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________
// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Метод 𝗺𝗮𝗽⁡​⁡
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

// function makeCarsWithDiscount(arr, discount) {
// 	// const newArr = []
// 	// arr.forEach((el) => {
// 	// 	newArr.push(el.price - el.price * discount)
// 	// })
// 	// return newArr
// 	return arr.map((el) => {
// 		return el.price - el.price * discount
// 	})
// }
// // const result = makeCarsWithDiscount(cars, 0.2)

// console.table(makeCarsWithDiscount(cars, 0.2))
// console.table(makeCarsWithDiscount(cars, 0.4))

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________
// ⁡⁢⁢⁢​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟯 - Метод 𝗳𝗶𝗹𝘁𝗲𝗿⁡​⁡
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// function filterByPrice(arr, threshold) {
// 	return arr.filter((el) => {
// 		return el.price < threshold
// 	})
// }

// function filterByPrice(arr, threshold) {
// 	return arr.filter((el) => el.price < threshold)
// }

// console.table(filterByPrice(cars, 30000))
// console.table(filterByPrice(cars, 25000))

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________
// ⁡⁢⁢⁢​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Метод 𝗳𝗶𝗹𝘁𝗲𝗿⁡​⁡
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// function getCarsWithDiscount(arr) {
// 	return arr.filter((el) => el.onSale)
// }

// console.table(getCarsWithDiscount(cars))

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________
// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟱 - Метод 𝗳𝗶𝗹𝘁𝗲𝗿⁡​⁡
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.

// console.table(getCarsWithType(cars, 'suv'))
// console.table(getCarsWithType(cars, 'sedan'))

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________
// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟲 - Метод 𝗳𝗶𝗻𝗱⁡​⁡

// function getCarByModel(arr, model) {
// 	return arr.find((item) => item.model === model)
// }

// console.log(getCarByModel(cars, 'F-150'))
// console.log(getCarByModel(cars, 'CX-9'))

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟳 - Метод 𝘀𝗼𝗿𝘁⁡​⁡
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount.

// console.table(sortByAscendingAmount(cars))
// console.table(cars)
// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________

// ⁡⁢⁢⁢​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟴 - Метод 𝘀𝗼𝗿𝘁⁡​⁡
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

// console.table(sortByDescendingPrice(cars))

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟵 - Метод 𝘀𝗼𝗿𝘁⁡​⁡
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order.

// console.table(sortByModel(cars, 'asc'))
// console.table(sortByModel(cars, 'desc'))

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭𝟬 - Метод 𝗿𝗲𝗱𝘂𝗰𝗲⁡​⁡
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// console.log(getTotalAmount(cars))

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________

// ⁡⁢⁢⁢​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭𝟭 - Ланцюжки методів⁡​⁡
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

// const getModelsOnSale = cars => {};

// console.table(getModelsOnSale(cars));

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭𝟮 - Ланцюжки методів⁡​⁡
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.

// const getSortedCarsOnSale = cars => {};

// console.table(getSortedCarsOnSale(cars));

// ⁡⁢⁢⁢⁡⁢⁢⁢___________________________________________________________________________________________________________________________⁡
//map
// const arr = ['Alex', 'Bob', 'Jon']
// const newArr = []

// arr.forEach((el, ind, arr) => {
// 	newArr.push(el.toUpperCase())
// })
// console.log('arr :>> ', arr)

// const newArr = arr.map((el, ind, ar) => {
// 	if (el.includes('A'))
// 	return el.toUpperCase()
// })
// console.log('newArr :>> ', newArr)

//filter
// const arr = ['Alex', 'Bob', 'Jon']

// const newArr = arr.filter((el) => {
// 	return el.includes('A') && el.includes('B')
// })

// console.log('newArr :>> ', newArr)

//find
// const arr = ['Alex', 'Bob', 'Jon']

// const newEl = arr.find((el) => {
// 	return el.includes('o')
// })
// console.log('newEl :>> ', newEl)

// const users = [
// 	{ name: 'Alex', age: 30, id: 123123123 },
// 	{ name: 'Alex2', age: 30, id: 234234234 },
// 	{ name: 'Alex3', age: 30, id: 345345345 },
// ]

// const newUser = users.find((user) => {
// 	return user.id === 123123123
// })

// console.log('newUser :>> ', newUser)

// const newArr = users.map((el) => {
// 	return el.age + 10
// })
// console.log('newArr :>> ', newArr)

// const filteredUsers = users.filter((el) => {
// 	return el.name.length > 4
// })
// console.log('filteredUsers :>> ', filteredUsers)

//
// const arr = [
// 	['Alex', 'Bob', 'Jon'],
// 	['Alex', 'Bob', 'Jon'],
// ]

// console.log('arr.flat() :>> ', arr.flat())
// const newArr = arr.flatMap((el) => {
// 	return el
// })
// console.log('newArr :>> ', newArr)

// const arr = ['Alex', 'Bob', 'Jon']

//some && every

// const result = arr.some((el) => {
// 	return el.includes('A')
// })
// const result = arr.every((el) => {
// 	return el.includes('A')
// })
// console.log('result :>> ', result)

//sort
// const arr = ['Bob', 'Jon', 'Alex', '1', '2', '3', 'bsd', 'Qwe']
// const arr = ['1', '65', '6', '11', '12', '2']
// // const arr = [5, 6, 7, 2, 3, 4, 5, 1, 2]

// arr.sort((a, b) => {
// if (a > b) return 1
// else return -1
// return a - b
// 	// return a.localeCompare(b)
// })

// console.log('arr :>> ', arr)

//reduce

// const salaries = [100, 200, 300, 400]
// const arr = ['Bob', 'Jon', 'Alex', '1', '2', '3', 'bsd', 'Qwe']

// let result = 0
// for (const salary of salaries) {
// 	// result += salary
// 	result += 100
// }
// console.log('result :>> ', result)

// console.log(arr.pop())

// const result = arr.reduce((acc, el, ind) => {
// 	// acc.push(el + '!')
// 	return acc + 10
// }, 0)
// console.log('result :>> ', result)

// const arr = ['ABob', 'AJon', 'Alex', 'bsd', 'Qwe']

// const result = arr.map((el) => el + '!')
// const result2 = arr.filter((el) => el.startsWith('A'))

// console.log('result2 :>> ', result)
