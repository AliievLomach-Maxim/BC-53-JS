const url = 'https://api.escuelajs.co/api/v1/products'

export function getProducts(clb) {
	fetch(url)
		.then((res) => res.json())
		.then((products) => clb([...products].sort((a, b) => b.id - a.id)))
}

export function createProduct(data, clb) {
	fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			accept: '*/*',
			'Content-Type': 'application/json',
		},
	})
		.then((res) => res.json())
		.then((product) => {
			if (product.error) {
				return alert(product.message[0])
			}
			alert('Create successfully!!!')
			getProducts(clb)
		})
}

export function updateProduct(id, data, clb) {
	fetch(`${url}/${id}`, {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((res) => res.json())
		.then((response) => {
			if (response.error) {
				return alert(response.message[0])
			}
			getProducts(clb)
		})
}

export function deleteProduct(id, clb) {
	fetch(`${url}/${id}`, {
		method: 'DELETE',
	})
		.then((res) => res.json())
		.then((response) => {
			if (response.error) {
				return alert(response.message[0])
			}
			getProducts(clb)
		})
}
