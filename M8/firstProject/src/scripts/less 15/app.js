// const value = 'qwerty'
// const value = 10
// const value = true
// const value = {
// 	name: 'Alex',
// 	age: 30,
// }
// const value = [1, 2, 3, 4]
// const value = () => {
// 	return 10
// }
// const value = {
// 	name: 'Alex',
// 	age: 30,
// 	getName() {},
// }
// const value = NaN
// const value = null
// const value = undefined
// const value =

// Boolean
// Number
// String
// Object
// undefined
// null
// BigInt
// Symbol

// const value = Symbol('name')
// const name2 = Symbol('name')
// const obj = {
// 	name: '',
// 	[name]: 123,
// 	[name2]: 123,
// }

// const value1 = BigInt(10)
// const value = 10n
// const value = value1

// console.log('value :>> ', value)
// const json = JSON.stringify(value)
// console.log('json :>> ', json)
// const parseJson = JSON.parse(json)
// console.log('parseJson :>> ', parseJson)
// console.log('typeof :>> ', typeof parseJson)

// const value = 'qwerty'
// const value = 10
// const value = true
// const value = {
// 	name: 'Alex',
// 	age: 30,
// }
// const value = [1, 2, 3, 4]
// // const value = () => {
// // 	return 10
// // }

// localStorage.setItem('data', JSON.stringify(value))
// localStorage.setItem('data2', JSON.stringify(value))

// // console.log(JSON.parse(localStorage.getItem('data')))

// // const newArr = arr.map()

// const jsonValue = JSON.stringify(value)
// localStorage.setItem('data', jsonValue)
// const local = localStorage.getItem('data')
// const parseJson = JSON.parse(local)
// console.log(parseJson)
// const value = 0
// const value = () => {}

// if (JSON.parse(value)) {
// 	console.log(true)
// 	console.log(true)
// 	console.log(true)
// 	console.log(true)
// 	console.log(true)
// } else {
// 	console.log(false)
// }
// console.log(false)
// console.log(false)

// const value = () => {}
// try {
// 	console.log(true)
// 	console.log(true)
// 	console.log(true)

// 	const some = JSON.parse(value)
// 	some.map()
// } catch (error) {
// 	console.log('Opps...')
// }
// console.log(true)
// console.log(true)

const list = document.querySelector('ul')
const form = document.querySelector('form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
	e.preventDefault()
	const { value } = e.target.elements.text
	createElList(value)
	e.target.reset()
}
const todos = []

const localData = localStorage.getItem('todos')

if (localData) {
	const todos = JSON.parse(localData)
	todos.forEach((el) => createElList(el))
}

function createElList(value) {
	for (let el of todos) {
		if (el === value) {
			alert('error')
			return
		}
	}

	const li = document.createElement('li')
	todos.push(value)
	li.id = todos.length - 1
	li.textContent = value
	const btn = document.createElement('button')
	btn.textContent = 'dell'
	li.append(btn)
	list.append(li)
	localStorage.setItem('todos', JSON.stringify(todos))
}

list.addEventListener('click', handleDelete)

function handleDelete(e) {
	if (e.target.localName === 'button') {
		const id = e.target.parentElement.id
		todos.splice(id, 1)
		localStorage.setItem('todos', JSON.stringify(todos))
		e.target.parentElement.remove()
	}
}
