const url = 'https://jsonplaceholder.typicode.com/posts'

const refs = {
	getPostBtn: document.querySelector('button'),
	postsList: document.querySelector('ul'),
}

// refs.getPostBtn.addEventListener('click', getPosts)
refs.getPostBtn.addEventListener('click', createPosts)

// function getPosts() {
// 	fetch(url)
// 		.then((res) => res.json())
// 		.then((posts) => createPosts(posts))
// }

// function createPosts(posts) {
// 	const arrPostsEl = []
// 	posts.forEach((post) => {
// 		const postEl = document.createElement('li')
// 		const title = document.createElement('h3')
// 		const body = document.createElement('p')
// 		title.textContent = post.title
// 		body.textContent = post.body
// 		postEl.append(title, body)
// 		arrPostsEl.push(postEl)
// 	})
// 	refs.postsList.append(...arrPostsEl)
// }

function getPosts() {
	return fetch(url)
		.then((res) => res.json())
		.then((posts) => posts)
}

function createPosts() {
	getPosts().then((posts) => {
		const arrPostsEl = []
		posts.forEach((post) => {
			const postEl = document.createElement('li')
			const title = document.createElement('h3')
			const body = document.createElement('p')
			title.textContent = post.title
			body.textContent = post.body
			postEl.append(title, body)
			arrPostsEl.push(postEl)
		})
		refs.postsList.append(...arrPostsEl)
	})
}
