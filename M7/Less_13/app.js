// ⁡⁣⁣⁢​‌‍‌​‌‌‍‍ ‍⁡⁢⁢⁢​‌‌‍Модуль 𝟳. Заняття 𝟭𝟯. 𝗕𝘂𝗯𝗯𝗹𝗶𝗻𝗴​⁡

// const card = document.querySelector('.card')
// card.addEventListener('click', (e) => console.log('card', e))

// const btn = document.querySelector('.btn')
// btn.addEventListener('click', (e) => {
// 	e.stopPropagation()
// 	console.log('btn', e)
// })

// const row = document.querySelector('.row')

// const elements = Array.from(row.children)
// const elements = [...row.children]

// elements.forEach((el) =>
// 	el.firstElementChild.addEventListener('click', (e) => {
// 		// console.log('currentTarget', e.currentTarget)
// 		// console.log('target', e)
// 		if (e.target.localName === 'a') {
// 			console.log('Click BTN')
// 		} else if (e.target.localName === 'h5') {
// 			console.log('add to fav')
// 		}
// 	})
// )

// row.addEventListener('click', (e) => {
// 	if (e.currentTarget !== e.target && e.target.className !== 'col') {
// 		console.log(e.target)
// 		if (e.target.localName === 'a') {
// 			console.log(e.target.textContent)
// 			e.target.style.backgroundColor = 'black'
// 		} else if (e.target.localName === 'h5') {
// 			console.log('add to fav')
// 		}
// 	}
// })

// console.log('elements :>> ', elements[0].firstElementChild)

// elements.forEach((el) => {
// 	el.firstElementChild.addEventListener('click', (e) => {
// 		if (e.target.localName === 'a') console.log('Click BTN')
// 	})
// 	el.firstElementChild.addEventListener('click', (e) => {
// 		if (e.target.localName === 'a') console.log('Click BTN Some')
// 	})
// })

// const btn = document.querySelector('.btn')
// const div = document.querySelector('.card-body')

// div.addEventListener('click', (e) => {
// 	console.log('card - body')
// })
// btn.addEventListener('click', (e) => {
// 	e.stopImmediatePropagation()
// 	console.log('btn')
// })
// console.log(Date.now());

// btn.addEventListener('click', (e) => {
// 	// e.stopPropagation()
// 	console.log('qwetry')
// })
// btn1.addEventListener('click', (e) => {
// 	// e.stopPropagation()
// 	console.log('qwetry')
// })
// btn2.addEventListener('click', (e) => {
// 	// e.stopPropagation()
// 	console.log('qwetry')
// })

// const start = Date.now()
// for (let i = 0; i < 100000; i++) {
// 	console.log(i)
// }
// const end = Date.now()
// console.log(end - start)
