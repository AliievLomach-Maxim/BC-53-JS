// ⁡⁣⁢⁣​‌‌‍Модуль 𝟯. Заняття 5. Об'єкти​

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Основи об'єктів⁡​⁡
// Напиши скрипт, який для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення використовуючи
// Object.keys() та for...of

// const user = {
// 	name: 'Mango',
// 	age: 20,
// 	hobby: 'html',
// 	premium: true,
// }

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - метод Object.values()⁡​⁡
// У нас є об'єкт, де зберігаються зарплати нашої команди.
// Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum.
// Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

// const salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130,
// 	countSalaries() {
// 		console.log('this :>> ', this)
// 		const salariesArray = Object.values(this)
// 		let totalSalary = 0
// 		for (let salary of salariesArray) {
// 			totalSalary += salary
// 		}
// 		console.log('totalSalary :>> ', totalSalary)
// 		return totalSalary
// 	},
// }

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 3 - Масив об'єктів⁡​⁡
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів
// та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння
// з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
// 	{ name: 'Смарагд', price: 1300, quantity: 4 },
// 	{ name: 'Діамант', price: 2700, quantity: 3 },
// 	{ name: 'Сапфір', price: 400, quantity: 7 },
// 	{ name: 'Щебінь', price: 200, quantity: 2 },
// ]

// function calcTotalPrice(stones, stoneName) {
// 	for (const el of stones) {
// 		if (el.name === stoneName) {
// 			return el.price * el.quantity
// 		}
// 	}
// }

// console.log( calcTotalPrice(stones, 'Щебінь'))
// console.log( calcTotalPrice(stones, 'Смарагд'))
// calcTotalPrice(stones, 'Смарагд')
// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁢⁢​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Комплексні завдання⁡​⁡
// Напиши скрипт управління особистим кабінетом інтернет банку.
// Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом
// та історією транзакцій.

// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
// 	DEPOSIT: 'deposit',
// 	WITHDRAW: 'withdraw',
// }

// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */
// const account = {
// 	// Поточний баланс рахунку
// 	balance: 0,

// 	// Історія транзакцій
// 	historyTransactions: [],

// 	/*
// 	 * Метод створює та повертає об'єкт транзакції.
// 	 * Приймає суму та тип транзакції.
// 	 */
// 	createTransaction(amount, type) {
// 	},

// 	/*
// 	 * Метод, що відповідає за додавання суми до балансу.
// 	 * Приймає суму транзакції.
// 	 * Викликає createTransaction для створення об'єкта транзакції
// 	 * після чого додає його до історії транзакцій
// 	 */
// 	deposit(amount) {
// 	},

// 	/*
// 	 * Метод, що відповідає за зняття суми з балансу.
// 	 * Приймає суму транзакції.
// 	 * Викликає createTransaction для створення об'єкта транзакції
// 	 * після чого додає його до історії транзакцій.
// 	 *
// 	 * Якщо amount більше ніж поточний баланс, виводь повідомлення
// 	 * про те, що зняття такої суми не можливе, недостатньо коштів.
// 	 */
// 	withdraw(amount) {
// 	},

// 	/*
// 	 * Метод повертає поточний баланс
// 	 */
// 	getBalance() {
// 	},

// 	/*
// 	 * Метод шукає та повертає об'єкт транзакції з історії транзакцій по id
// 	 */
// 	getTransactionDetails(id) {},

// 	/*
// 	 * Метод повертає кількість коштів
// 	 * певного типу транзакції з усієї історії транзакцій
// 	 */
// 	getTransactionTotal(typeTransaction) {},
// }

// account.deposit(500)
// account.deposit(500)
// account.withdraw(200)
// account.withdraw(20000)
// console.log('History:', account.historyTransactions)
// // // console.log('TransactionDetails id=2:', account.getTransactionDetails(2))
// // // console.log('TransactionDetails id=3:', account.getTransactionDetails(3))
// // // console.log(
// // // 	'TransactionTotalDEPOSIT:',
// // // 	account.getTransactionTotal(Transaction.DEPOSIT)
// // // )
// // // console.log(
// // // 	'TransactionTotalWITHDRAW:',
// // // 	account.getTransactionTotal(Transaction.WITHDRAW)
// // // )
// console.log('Balance:', account.getBalance())

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡
// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡
// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// const arr = [1, 2, 3, 4]

// arr[0]
// arr[1]

// const obj = {
// 	'value-1': 1,
// 	value2: 2,
// 	value3: 3,
// }

// const value = 'value-1'

// console.log('obj :>> ', obj[value])

// const value = prompt('input...')

// const user = {
// 	name: 'Alex',
// 	age: 30,
// 	address: 'Ukraine',
// }

// console.log(user[value]) // user['']

// if (value === 'name') console.log(user.name)
// else if (value === 'age') console.log(user.age)
// else if (value === 'address') console.log(user.address)

// const user = {
// 	name: 'Alex',
// 	age: 30,
// 	address: 'Ukraine',
// 	name: 'Bob',
// 	items: {
// 		name: 'asdasd',
// 		age: 'asdasd',
// 		info: {
// 			xx: 123,
// 		},
// 	},
// }

// const user = {}
// user.name = 'Alex'
// user.age = 30
// user.name = 'Bob'

// const user = {}
// user.name = 'Alex'

// user.isDev = true

// delete user.address

// console.log('user :>> ', user.items['info'].xx)

// const arr = [1,2,3]
// arr[0] = '123'

// const user = {
// 	name: 'Alex',
// 	age: 30,
// 	address: 'Ukraine',
// }

// // const user42 = {
// // 	name: 'Alex',
// // 	age: 30,
// // 	address: 'Ukraine',
// // 	info: 'asd',
// // }

// const arr = [1,2,34]
// arr.includes(1)

// const user2 = Object.assign({}, user)
// user2.age++
// console.log('user2 :>> ', user2)
// console.log('user :>> ', user)

// const user = {
// 	name: 'Alex',
// 	age: 30,
// 	// getName() {
// 	// 	console.log('Hello')
// 	// },
// }

// const user2 = Object.create(user)
// user2.name = 'Bob'
// user2.address = 'Ukr'
// user2.age = 12

// console.log('user2 :>> ', user2.age)

// const userParams = {
// 	location: 'Ukraine',
// 	isDev: true,
// 	getName() {
// 		console.log(this.name)
// 	},
// }

// const userParamsByJS = Object.create(userParams)
// userParamsByJS.lang = 'JS'

// const user = Object.create(userParams)
// user.name = 'Alex'
// user.email = 'asd@asd.co'
// // user.getName = function () {
// // 	console.log(user.name)
// // }

// user.getName()

// const user2 = Object.create(userParams)
// user2.name = 'Bob'
// user2.email = 'asd@asd.co'
// // user2.getName = function () {
// // 	console.log(user2.name)
// // }
// user2.getName()

// const user3 = Object.create(userParams)
// user3.name = 'Jon'
// user3.email = 'asd@asd.co'
// // user3.getName = function () {
// // 	console.log(user3.name)
// // }
// user3.getName()

// const obj = {
// 	value1: 1,
// 	value2: 2,
// 	value3: 3,
// }

// for (const el in obj) {
// 	console.log(obj[el])
// }

// const userParams = {
// 	location: 'Ukraine',
// 	isDev: true,
// 	getName() {
// 		console.log(this.name)
// 	},
// }

// const user = Object.create(userParams)
// user.name = 'Alex'
// user.email = 'asd@asd.co'
// user.getName = function () {
// 	console.log(this.name)
// }
// user.getName = function () {
// 	console.log(user.name)
// }
// const elems = []
// for (const el in user) {
// 	// if (user.hasOwnProperty(el))
// 	elems.push(user[el])
// }

// console.log('elems :>> ', elems)

// const arrKeysUser = Object.keys(user)
// console.log('arrKeysUser :>> ', arrKeysUser)

// for (const el of arrKeysUser) {
// 	console.log('user[el] :>> ', user[el])
// }

// const arrValuesUser = Object.keys(user)
// console.log('arrKeysUser :>> ', arrValuesUser)

// for (const el of arrValuesUser) {
// 	console.log('el :>> ', user[el])
// }

// console.log(Object.entries(user))

const user = {
	name: 'Alex',
	info: {
		xx: 'asd',
		baseInfo: {
			globalInfo: 'asd',
		},
	},
}

const user2 = {
	name: 'Alex',
	info: {
		xx: 'asd',
	},
}

function fn(objUser) {
	if (objUser?.info?.baseInfo?.globalInfo) {
		console.log(objUser.info.baseInfo.globalInfo)
	}
}

fn(user)
fn(user2)
fn()
