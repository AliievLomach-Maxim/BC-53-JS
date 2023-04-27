// ⁡⁣⁣⁢​‌‍‌​‌‌‍‍ ‍​‌‌‍⁡⁢⁢⁢Модуль 𝟳. Заняття 𝟭4.  throttle/debounce & lazy-loading⁡​

// throttle
// debounce
// lazysizes

// const body = document.querySelector('body')

// document.addEventListener(
// 	'scroll',

// 	_.debounce(() => {
// 		const randomColor = `#${Math.random().toString(16).slice(2, 8)}`
// 		body.style.backgroundColor = randomColor
// 		console.log(randomColor)
// 	}, 1500)
// )

const input = document.querySelector('#qwerty')
// input.focus()
input.addEventListener('focus', (e) => {
	const div = document.createElement('div')
	div.style.width = '30px'
	div.style.height = '30px'
	div.style.backgroundColor = 'red'
	input.insertAdjacentElement('beforebegin', div)
})

input.addEventListener('blur', (e) => {
	const div = e.target.previousElementSibling
	div.remove()
})

input.addEventListener('mouseover', (e) => {
	const div = document.createElement('div')
	div.style.width = '30px'
	div.style.height = '30px'
	div.style.backgroundColor = 'red'
	input.insertAdjacentElement('beforebegin', div)
})
input.addEventListener('mouseleave', (e) => {
	const div = e.target.previousElementSibling
	div.remove()
})
