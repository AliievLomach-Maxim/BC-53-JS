const url = 'https://jsonplaceholder.typicode.com/posts'

const refs = {
	getPostBtn: document.querySelector('button'),
	postsList: document.querySelector('ul'),
	form: document.querySelector('.update'),
}

refs.form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
	e.preventDefault()

	const newPost = {
		id: 1,
		title: e.target.elements.title.value,
		// body: e.target.elements.body.value,
		// userId: 1,
	}
	createPost(newPost)
}

function createPost(data) {
	fetch(`${url}/1`, {
		method: 'PATCH',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((res) => res.json())
		.then((posts) => console.log('posts :>> ', posts))
}
