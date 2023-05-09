const url = 'https://api.escuelajs.co/api/v1/products'

const refs = {
	deleteBtn: document.querySelector('.delete'),
}

refs.deleteBtn.addEventListener('click', handleDelete)

function handleDelete() {}

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
