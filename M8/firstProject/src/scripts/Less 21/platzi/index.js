import { createProduct, deleteProduct, getProducts, updateProduct } from './api'

const refs = {
	getBtn: document.querySelector('button'),
	form: document.querySelector('form'),
	inputs: {
		title: document.querySelector('input[name="title"]'),
		body: document.querySelector('input[name="info"]'),
		price: document.querySelector('input[name="price"]'),
	},
	productsList: document.querySelector('ul'),
	paginationList: document.querySelector('.pagination'),
}

const { getBtn, form, productsList, paginationList, inputs } = refs

getBtn.addEventListener('click', handleClick)

function handleClick() {
	getProducts(createProductsList)
}

function createProductsList(products) {
	productsList.innerHTML = ''
	const markup = products.reduce(
		(acc, { id, images, title, price, description }) =>
			acc +
			`
    <li id=${id}>
    <img src=${images[0]}>
    <h3>Title:${title}</h3>
    <h2>${price} $</h2>
    <p>Info: ${description}</p>
    <br/>
    <button>Delete</button>
    <br/>
    <button class="updateBtn">Update</button>
    <br/><br/>
    </li>
    `,
		''
	)
	productsList.insertAdjacentHTML('afterbegin', markup)
}

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
	e.preventDefault()
	const { elements } = e.target
	const newProduct = {
		title: elements.title.value,
		price: elements.price.value,
		description: elements.info.value,
		categoryId: 1,
		images: ['https://placeimg.com/640/480/any'],
	}
	createProduct(newProduct, createProductsList)
}

productsList.addEventListener('click', handleClickList)

function handleClickList({ target }) {
	if (target.localName === 'button' && target.className === 'updateBtn') {
		updateProduct(
			target.parentElement.id,
			{
				title: inputs.title.value,
				description: inputs.body.value,
				price: inputs.price.value,
			},
			createProductsList
		)
	} else if (target.localName === 'button') {
		deleteProduct(target.parentElement.id, createProductsList)
	}
}
