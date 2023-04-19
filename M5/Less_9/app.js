'use strict'
// ⁡⁣⁢⁣​‌‌‍Модуль 5. Заняття 9. Контекст виклику функції та this⁡​⁡

// ⁡⁢⁢⁢________________________________________________________________________________________________________________________________

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟭 - Майстерня коштовностей⁡​⁡

// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує
// та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
// 	stones: [
// 		{ name: 'Emerald', price: 1300, quantity: 4 },
// 		{ name: 'Diamond', price: 2700, quantity: 3 },
// 		{ name: 'Sapphire', price: 1400, quantity: 7 },
// 		{ name: 'Ruby', price: 800, quantity: 2 },
// 	],
// 	calcTotalPrice(stoneName) {
// 		// let totalPrice = 0
// 		// for (const iterator of chopShop.stones) {
// 		// 	if (iterator.name === stoneName) {
// 		// 		totalPrice = iterator.price * iterator.quantity
// 		// 	}
// 		// }
// 		// return totalPrice

// stones.filter((el)=>{
// 	 if(el.name === stoneName){
// 		return 100
// 	 }

// 		return this.stones.reduce((_, el) => {
// 			if (el.name === stoneName) {
// 				return el.price * el.quantity
// 			}
// 			// return acc
// 		}, 0)

// 		// return stone
// 	},
// }

// console.log(chopShop.calcTotalPrice('Emerald')) // 5200
// console.log(chopShop.calcTotalPrice('Diamond')) // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')) // 9800
// console.log(chopShop.calcTotalPrice('Ruby')) // 1600

// ⁡⁢⁢⁢________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝟮 - Телефонна книга​⁡

// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phonebook = {
// 	contacts: [],
// 	add(contact) {
// 		const newContact = {
// 			list: 'default',
// 			...contact,
// 			id: this.generateId(),
// 			createdAt: this.getDate(),
// 		}
// 		this.contacts.push(newContact)
// 	},
// 	generateId: function () {
// 		return '_' + Math.random().toString(36).substr(2, 9)
// 	},
// 	getDate() {
// 		return Date.now()
// 	},
// }

// phonebook.add({
// 	name: 'Mango',
// 	email: 'mango@mail.com',
// 	list: 'friends',
// })
// // console.log(
// // 	phonebook.add({
// // 		name: 'Mango',
// // 		email: 'mango@mail.com',
// // 		list: 'friends',
// // 	})
// // )
// // console.log(
// phonebook.add({
// 	name: 'Poly',
// 	email: 'poly@hotmail.com',
// })
// console.log(phonebook.contacts)

// ⁡⁢⁢⁢________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁣⁣​‌‍‌⁡⁢⁢⁢𝗘𝘅𝗮𝗺𝗽𝗹𝗲 3 - Калькулятор⁡​⁡
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.

// calculator.read(2, 3)
// console.log('calculator :>> ', calculator)
// console.log('calculator.sum() :>> ', calculator.sum()) //5
// console.log('calculator.mult() :>> ', calculator.mult()) //6

// ⁡⁢⁢⁢________________________________________________________________________________________________________________________________⁡
// ⁡⁢⁢⁢________________________________________________________________________________________________________________________________⁡
// ⁡⁢⁢⁢________________________________________________________________________________________________________________________________⁡

// function fn() {
// 	console.log(this)
// }

// fn()

// const user = {
// 	name: 'Alex',
// 	age: 30,
// 	getName() {
// 		console.log(this.name)
// 	},
// }

// user.getName()

// const newUser = Object.create(user)
// newUser.name = 'Bob'
// newUser.getName()

// function fn() {
// 	console.log(this)
// }

// const user = {
// 	name: 'Alex',
// 	func: fn,
// }

// fn()
// user.func()

// function fn(a, b) {
// 	console.log('this from FN :>> ', this)
// 	const fn1 = () => {
// 		console.log('this from => :>> ', this)
// 	}
// 	fn1()
// }

// const user2 = {
// 	name: 'Alex',
// }

// // fn()
// // user2.func()

// const user = {
// 	name: 'Alex',
// }

// // call,apply,bind
// fn(10, 20)
// fn.call(user2, 10, 20)
// fn.apply(user2, [10, 20])
// const newFn = fn.bind(user2, 10, 20)
// newFn()

// const user = {
// 	name: 'Alex',
// }
// const user2 = {
// 	name: 'Alex2',
// }
// function fn(a, clb) {
// 	a++
// 	console.log('this FN :>> ', this)
// 	console.log('clb :>> ', clb)
// 	clb(a)
// }

// function fn2(a) {
// 	console.log(this, a)
// 	return 100
// }

// fn.call(user, 10, fn2.bind(user))
// fn.call(user2, 10, fn2)

// function getName() {
// 	console.log(this.name)
// }

// // getName()

// const users = ['Alex', 'Bob', 'Jon']

// users.forEach((el) => {
// 	const newObj = {
// 		name: el,
// 	}
// 	getName.call(newObj)
// })

// const user = {
// 	name: 'Alex',
// }

// getName.call(user)

// function getName1() {
// 	console.log(this.name)
// }

// function getName2(obj) {
// 	console.log(obj.name)
// }

// const user = {
// 	name:'Alex'
// }

// getName1.call(user)
// getName2(user)
