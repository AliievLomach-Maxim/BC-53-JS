// https://jsonplaceholder.typicode.com/
// const response = fetch('https://jsonplaceholder.typicode.com/users')
// const info = response
// 	.then((resp) => {
// 		const data = resp.json()
// 		return data
// 	})
// 	.then((value) => {
// 		console.log('value :>> ', value)
// 	})

// fetch('https://jsonplaceholder.typicode.com/users123')
// 	.then((resp) => resp.json())
// 	.then((value) => {
// 		createData(value)
// 	})
// 	.catch((error) => console.log('error :>> ', error))

// function createData(data) {
// 	console.log('data :>> ', data)
// 	// data.map((el) => console.log('el :>> ', el))
// }
// fetch('https://jsonplaceholder.typicode.com/products123')
// 	.then((resp) => {
// 		// if (resp.ok)
// 		return resp.json()
// 		// throw new Error('...')
// 		// return Promise.reject('error')
// 	})
// 	.then((value) => {
// 		if (value.message) value.map()
// 		// return Promise.reject(value)
// 		createData(value)
// 	})
// 	.catch((error) => alert(error))

// function createData(data) {
// 	console.log('data :>> ', data)
// 	data.map((el) => console.log('el :>> ', el))
// }

// const data = {
// 	name: 'Alex',
// 	age: 30,
// }

// fetch('https://jsonplaceholder.typicode.com/products', {
// 	method: 'post',
// 	body: JSON.stringify(data),
// 	headers: {
// 		'Content-Type': 'application/json',
// 	},
// })
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m

fetch(
	'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m'
)
	.then((res) => res.json())
	.then(console.log)
