// ​‌‌​‌‌‍⁡⁣⁢⁣‍Модуль 6. Заняття 11. ‍𝗗𝗢𝗠⁡​​

// https://codesandbox.io/s/tribute-page-8rw5u?file=/style.css:0-2537

// getElementById
// getElementsByClassName
// getElementByTagName
// querySelector
// querySelectorAll

// const main = document.querySelector('main')
// console.log('main :>> ', main)

// const title = document.querySelector('#title')

// textContent
// title.textContent = 'qwrety'
// title.id =
// title.className = 'qwerty'
// title.classList.add('hide')
// console.log('title.className :>> ', title.className)
// title.classList.remove('qwerty')
// console.log('title.className :>> ', title.className)
// title.classList.toggle('qwerty')
// children
// console.log('main.chil :>> ', main.children)
// style
// title.style.color = 'red'
// innerHTML
// main.innerHTML = `
// <h1 class='qwerty'>qwerty</h1>
// <p>qwerty123</p>
// `

// main.innerHTML = ''
// title.innerHTML = 'qwerty'

// createElement
// const title = document.createElement('h1')
// title.textContent = 'qwerty'
// title.id = 'qwerty'
// title.className = 'qwerty'

// main.prepend(title)
// console.log('title :>> ', title)
// main.insertAdjacentElement('afterend', title)

// main.insertAdjacentHTML(
// 	'beforebegin',
// 	`
// <h1 class='qwerty'>qwerty</h1>
// <p>qwerty123</p>
// `
// )

// append & prepend
// insertAdjacent
// classList(add, remove, toggle)

// hasAttribute
// getAttribute
// removeAttribute
// setAttribute

// console.log(main.removeAttribute('id'))
//data-test
// main.dataset.qwerty = '123'
// console.log('main :>> ', main.dataset.qwerty)
// ----------
const infoText = [
	'He was born in Paris, France on February 24<sup>th</sup>, 1932.',
	'His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of a conductor.',
	'His sister was a Soprano and a member of the Swingle Singers.',
	'Along his career, he composed more than two hundred film and television scores.',
	'He was also a Jazz player and worked with giants like Miles Davis or Stan Getz.',
]

const main = document.querySelector('main')

const title = document.createElement('h1')
title.id = 'title'
title.textContent = '- Michel Legrand -'

const imgDiv = document.createElement('figure')
imgDiv.id = 'img-div'

const img = document.createElement('img')
img.id = 'image'
img.src =
	'https://m.media-amazon.com/images/M/MV5BMTYxODkyODEzNl5BMl5BanBnXkFtZTcwMTY0MTY1OQ@@._V1_.jpg'
img.alt = 'Michel Legrand conducting his orchestra.'

const imgCaption = document.createElement('figcaption')
imgCaption.id = 'img-caption'
imgCaption.textContent = 'Michel Legrand conducting his orcherstra.'

imgDiv.append(img, imgCaption)

const tributeInfo = document.createElement('article')
tributeInfo.id = 'tribute-info'

const div = document.createElement('div')
div.id = 'intro'

// const text = document.createElement('p')
// text.textContent =
// 	'&bull; Michel Legrand (1932 - 2019) was a famous French musician. &bull'

// div.append(text)

div.insertAdjacentHTML(
	'afterbegin',
	`
<p>&bull; Michel Legrand (1932 - 2019) was a famous French musician. &bull;</p>
`
)

tributeInfo.prepend(div)

main.append(title, imgDiv, tributeInfo)
// -------
const list = document.createElement('ul')

tributeInfo.append(list)

// const listStr = infoText.map((el) => `<li>${el}</li>`).join('')
const listStr = infoText.reduce(
	(acc, el) => acc + `<li><p class='text-List'>${el}</p></li>`,
	''
)

list.insertAdjacentHTML('beforebegin', listStr)
