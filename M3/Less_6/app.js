//​‌‌‍ ⁡⁣⁣⁢⁡⁣⁢⁣‍Модуль 𝟯 Заняття 𝟲. Деструктуризація та rest/spread​⁡​⁡

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 1 - Деструктуризація⁡​⁡
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.

// function calcBMI(weight,height) {

// 	const numericWeight = Number(weight.replace(',', '.'))
// 	const numericHeight = Number(height.replace(',', '.'))
// 	return Number((numericWeight / numericHeight ** 2).toFixed(1))
// }

// // Було
// console.log(calcBMI('88,3', '1.75'))
// console.log(calcBMI('68,3', '1.65'))
// console.log(calcBMI('118,3', '1.95'))

// Стало:

// // // Очікується
// // const someObj = {
// // 	weight: '88,3',
// // 	height: '1.75',
// // }
// // console.log('calcBMI(someObj) :>> ', calcBMI(someObj));
// console.log(
// 	calcBMI({
// 		weight: '68,3',
// 		height: '1.65',
// 	})
// )
// console.log(
// 	calcBMI({
// 		weight: '118,3',
// 		height: '1.95',
// 	})
// )
// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________⁡

// ⁡⁢⁢⁢​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Деструктуризація⁡​⁡
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість
// набору незалежних аргументів.

// // Було
// function printContactsInfo(names, phones) {
// 	const nameList = names.split(',')
// 	const phoneList = phones.split(',')
// 	for (let i = 0; i < nameList.length; i += 1) {
// 		console.log(`${nameList[i]}: ${phoneList[i]}`)
// 	}
// }

// printContactsInfo(
// 	'Jacob,William,Solomon,Artemis',
// 	'89001234567,89001112233,890055566377,890055566300'
// )

//стало:

// const users = {
// 	names: 'Jacob,William,Solomon,Artemis',
// 	phones: '89001234567,89001112233,890055566377,890055566300',
// }

// printContactsInfo(users)

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________⁡⁡

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟯 - Глибока деструктуризація⁡​⁡
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість
// набору незалежних аргументів.

// // Було
// function getBotReport(companyName, repairBots, defenceBots) {
// 	return `${companyName} has ${repairBots + defenceBots} bots in stock`
// }

// console.log(getBotReport('Cyberdyne Systems', 150, 50))

// // стало

// const someObj = {
// 	companyName: 'Cyberdyne Systems',
// 	bots: {
// 		repair: 150,
// 		defense: 50,
// 	},
// }

// console.log(getBotReport(someObj))
// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟰 - Деструктуризация⁡​⁡
// Створи функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName
// та stock
// та виводила репорт про кількість товарів на складі будь-якої компанії.

// console.log(
// 	getStockReport({
// 		companyName: 'Cyberdyne Systems',
// 		stock: {
// 			repairBots: 150,
// 			defenceBots: 50,
// 		},
// 	})
// ) // "Cyberdyne Systems has 200 items in stock"

// console.log(
// 	getStockReport({
// 		companyName: 'Belacci',
// 		stock: {
// 			shoes: 20,
// 			skirts: 10,
// 			hats: 5,
// 		},
// 	})
// ) // "Belacci has 35 item in stock"
// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________⁡

// ⁡⁢⁢⁢​‌‍‌𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟱 - Операція 𝘀𝗽𝗿𝗲𝗮𝗱⁡​⁡
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту
// з доданими властивостями id, а також list зі значенням "default" якщо
// в partialContact немає такої властивості.

// //

// console.log(
// 	createContact({
// 		name: 'Mango',
// 		email: 'mango@mail.com',
// 		list: 'friends',
// 	})
// )

// console.log(
// 	createContact({
// 		name: 'Poly',
// 		email: 'poly@hotmail.com',
// 	})
// )

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________⁡

// ⁡⁢⁢⁢​‌‍‌​‌‍‌Example 6 - Операція rest⁡​⁡
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// console.log(
// 	transformId({
// 		id: 1,
// 		firstName: 'Jacob',
// 		lastName: 'Mercer',
// 		email: 'j.mercer@mail.com',
// 		friendCount: 40,
// 	})
// )

// console.log(
// 	transformId({
// 		id: 2,
// 		firstName: 'Adrian',
// 		lastName: 'Cross',
// 		email: 'a.cross@hotmail.com',
// 		friendCount: 20,
// 	})
// )
// ⁡⁢⁢⁢___________________________________________________________________________________________________________________________
// ⁡⁢⁢⁢___________________________________________________________________________________________________________________________
// ⁡⁢⁢⁡⁢⁢⁢_________________________________________________________________________________________________________________________

// const user = {
// 	info: { name: 'Alex', secondName: 'Alexov' },
// 	age: 30,
// 	items: [],
// 	address: {
// 		info: { street: 'asd' },
// 	},
// }

// // const name = user.info.name
// // const { name } = user.info

// // const secondName = user.info.secondName
// // const { secondName } = user.info

// const { name, secondName } = user.info
// const { items, age } = user

// const street = user.address.info.street

// // const { age } = user

// // const {  info } = user
// // const info = user.info

// function fn(params) {}

// console.log(name)

// console.log(`Info >> ${name} ${secondName}`)

// fn(name)

// const user = {
// 	info: { name: 'Alex', secondName: 'Alexov' },
// 	age: 30,
// 	items: [],
// 	address: {
// 		info: { items: 'asd' },
// 	},
// }

// const {info,age,address,items} = user
// const {info} = user.address
// const {address:{info}} = user
// 1 -
// const street = user.address.info.street
// 2 -
// const { street } = user.address.info
// 3 -
// const {address: {info: { street },},} = user

// const {
// 	address: {
// 		info: { street },
// 	},
// 	items,
// 	info: { secondName },
// } = user

// const { items: itemsByAddressUserInfo } = user.address.info
// const { items } = user

// const {
// 	address: {
// 		info: { street: newStreet },
// 	},
// 	items,
// 	info: { secondName },
// } = user

// const street = user.address.info.street
// user.address.info.street = 'dsadasd'

// const arr = ['Alex', 30, 'adsasdas', '!!!']
// const [info,newFn] = fn()
// const info = name[0]
// const newFn = nume[1]

// const name = arr[0]
// const age = arr[1]

// console.log(arr[0],arr[1]);
// const info = arr[2]
// const [name, _, info] = arr

// function fn(name, _, info) {
// 	console.log(name)
// 	console.log(info)
// 	const age = 12
// 	let a,
// 		b = 13

// 	console.log(age)
// }

// fn('Alex', 30, 'asdakjsdh')

// const arr = [1, '2asdasdas', 3]

// const newArr = arr

// // const x = 10,12,13

// arr.push(123)

// console.log('arr :>> ', arr)
// console.log('newArr :>> ', newArr)
// console.log('arr === newArr :>> ', arr === newArr)

// const arr1 = [1, 2, 3]

// const arr1_2 = [...arr1]

// arr1.push(123)

// console.log('arr1 :>> ', arr1)
// console.log('arr1_2 :>> ', arr1_2)

// const user = {
// 	name: 'Alex',
// 	age: 30,
// }

// const userInfo = {
// 	address: 'asd',
// 	items: [],
// }

// const allInfoUser = {
// 	name: 'Bob',
// 	...user,
// 	// name: 'Alex',
// 	// age: 30,
// 	...userInfo,
// 	// address: 'asd',
// 	// items: [],
// 	lang: 'ua',
// }

// console.log('allInfoUser :>> ', allInfoUser)

// function newUser(user) {
// 	const newObj = {
//         location: 'Ukraine',
// 		id: '1236978ajsdgasfb',
// 		...user,
// 	}
// 	// newObj.name = user.name
// 	// newObj.email = user.email
// 	// newObj.location = user.location ? user.location : 'Ukraine'
// 	return newObj
// }

// console.log(newUser({ name: 'Alex', email: 'asd@asd' }))
// console.log(newUser({ name: 'Alex', email: 'asd@asd', location: 'En' }))

// function fn(...params) {
// 	console.log(arguments)
// 	console.log(params)
// }

// // fn(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
// // fn(1, 2)
// // fn(1, 2, 3)

// function sum(params1, ...asd) {
// 	let result = 0
// 	for (const el of asd) {
// 		result += el
// 	}
// 	console.log(params1, result)
// 	// const result = a+b+c
// }

// sum('res', 5)
// sum('res2', 5, 10)
// sum('re3', 5, 10, 123, 123, 123)
// sum('res5', 5, 10, 2, 234, 3)

// function fn(number1,b) {
//     console.log(a+b);
// }

// fn(10,20)

// function fn(obj, ...paramm) {
// const { id, ...params } = obj
// const id = obj.id
// const params = {}
// params.info = obj.info

// 	// console.log('name :>> ', name)
// 	// console.log('age :>> ', age)
// 	// console.log('info :>> ', info)
// 	console.log('params :>> ', params)
// 	console.log('paramm :>> ', paramm)
// }

// fn('Alex', 30, 'asd')
// const user = {
// 	name: 'alex',
// 	age: 30,
// 	info: 123,
// }
// fn(user)

// fn({ info: 'qwe', name: 'Bob', age: 12, id: '123hjkasd' }, 1, 2, 3, 4, 5)
