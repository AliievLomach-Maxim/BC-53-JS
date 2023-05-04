// // const now = new Date(2020, 11, 12, 20, 12, 13)
// // const now = new Date('1950.11.10')
// // const now = new Date(1950, 1, 1)
// // console.log('now :>> ', now)
// // console.log('now :>> ', now.toLocaleDateString())
// // now.setFullYear(2020)
// // console.log(now)

// // const inpDate = document.querySelector('input')
// // inpDate.addEventListener('change', (e) => console.log('e :>> ', e))

// // const today = new Date()
// // const yesterday = new Date().setDate(2)
// // const result = today - yesterday

// // console.log('result :>> ', result.getDate());
// // console.log('today :>> ', (today - yesterday) / 1000 / 60 / 60)

// // setInterval(() => {
// // 	const now = new Date()
// // 	// console.log('now :>> ', now.toLocaleTimeString())
// // 	h1.textContent = now.toLocaleTimeString()
// // }, 1000)

// const h1 = document.createElement('h1')
// const body = document.querySelector('body')
// body.append(h1)

// const newYearDate = new Date(2024, 0, 1)
// setInterval(() => {
// 	const today = new Date()
// 	const diff = newYearDate - today
// 	// const date = new Date(diff).getSeconds()
// 	// console.log('date :>> ', date.getSeconds())

// 	const days = (diff / 1000 / 60 / 60 / 24).toFixed(0)
// 	const hours = String(
// 		Math.floor(((diff / 1000 / 60 / 60) % 24).toFixed(0))
// 	).padStart(2, '0')
// 	const minutes = String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, '0')
// 	const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0')

// 	h1.textContent = `${days} : ${hours} : ${minutes} : ${seconds}`
// }, 1000)
