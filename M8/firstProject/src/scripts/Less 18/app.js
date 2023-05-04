// const value = new Promise((resolve, reject) => {
// 	const random = Number(Math.random().toString().slice(2, 4))
// 	if (random % 2 === 0) {
// 		resolve(random)
// 	} else reject('Error!!!!')
// })

// value.then((random) => {
// 	console.log('resolve :>> ', random)
// })
// value.catch((x) => {
// 	console.log('reject :>> ', x)
// })

// console.log('value :>> ', value)

// const value2 = new Promise((res,rej) => {
// fetch
// })

// value2.then((res) => {

// })

// const btn = document.querySelector('#animate-button')
// const box = document.querySelector('#box')
// const box2 = document.querySelector('#box2')

// btn.addEventListener('click', () => {
// 	box.classList.add('move')
// 	box2.classList.add('move')
// })

// box.addEventListener('animationend', () => {
// 	alert('END!')
// })

// box2.addEventListener('animationend', () => {
// 	alert('END!')
// })

// const promise1 = new Promise((res, rej) => {
// 	res(10)
// })
// const promise2 = new Promise((res, rej) => {
// 	setTimeout(() => {
// 		res(100)
// 	}, 3000)
// })
// const promise3 = new Promise((res, rej) => {
// 	res(20)
// })

// Promise.race([promise1, promise2, promise3]).then((params) => {
// 	console.log('params :>> ', params)
// })

const btn = document.querySelector('#animate-button')
const box = document.querySelector('#box')
const box2 = document.querySelector('#box2')

// btn.addEventListener('click', () => {
// 	box.classList.add('move')
// 	box2.classList.add('move')
// })

// box.addEventListener('animationend', () => {
// 	alert('END!')
// })

// box2.addEventListener('animationend', () => {
// 	alert('END!')
// })

const fn = () => {
	return new Promise((res) => {
		box.addEventListener('animationend', res)
		box.classList.add('move')
	})
}
const fn2 = () => {
	return new Promise((res) => {
		box2.addEventListener('animationend', res)
		box2.classList.add('move')
	})
}

btn.addEventListener('click', () => {
	Promise.all([fn(), fn2()]).then(() => {
		alert('END')
	})
	// fn().then(() => alert('End'))
	// fn2().then(() => alert('End'))
})
