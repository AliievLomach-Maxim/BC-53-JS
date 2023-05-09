export function createErrorCard(error, code) {
	console.log('error :>> ', error, code)
	const body = document.querySelector('body')
	const divError = document.createElement('div')
	divError.style.backgroundColor = 'red'
	divError.style.border = '2px solid yellow'
	divError.style.width = '300px'

	const headerErr = document.createElement('h1')
	headerErr.textContent = `${code}: ${error.code}`

	const title = document.createElement('h3')
	title.textContent = error.message

	divError.append(headerErr, title)
	body.append(divError)
}

const result = new Promise((r, rej) => {
	rej('data')
})
const result2 = Promise.reject('data')

const result3 = new Promise((resolve) => {
	resolve('data')
})
const result4 = Promise.resolve('data')
