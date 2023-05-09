import { getNews, pageSize } from './API'

const btn = document.querySelector('button')
const list = document.querySelector('ul')
const paginationList = document.querySelector('.pagination')
btn.addEventListener('click', handleClick)

function handleClick() {
	getNews(createListNews)
}

function createListNews(data) {
	const arr = []
	list.innerHTML = ''
	data.articles.forEach((el) => {
		const li = document.createElement('li')
		li.textContent = el.title
		arr.push(li)
	})
	list.append(...arr)
	createPagination(data.totalResults)
}

function createPagination(total) {
	const arr = []
	paginationList.innerHTML = ''
	const pages = Math.ceil(total / pageSize)
	for (let i = 1; i <= pages; i++) {
		const li = document.createElement('li')
		li.textContent = i
		arr.push(li)
	}
	paginationList.append(...arr)
}

paginationList.addEventListener('click', handlePagination)

function handlePagination({ target }) {
	if (target.localName === 'li') {
		getNews(createListNews, target.textContent)
	}
}
