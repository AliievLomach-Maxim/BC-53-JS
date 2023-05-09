import { createErrorCard } from './eerorPage'

const API_KEY = '7391ec9459644ca0a76cb25df2a23597'
const BASE_URL = 'https://newsapi.org/v2/top-headlines/'
export const pageSize = 3

export function getNews(clb, page = 1) {
	fetch(`${BASE_URL}?country=us&pageSize=${pageSize}&page=${page}`, {
		headers: {
			// 'X-Api-Key': API_KEY,
		},
	})
		// .then((res) => {
		// 	// if (res.ok) {
		// 	return res.json()
		// 	// }
		// 	// return Promise.reject(res.json())
		// 	// throw new Error(res.json())
		// })
		// .then((data) => {
		// 	if (data.status === 'ok') return clb(data)
		// 	return Promise.reject(data)
		// })
		// .catch((e) => createErrorCard(e))
		.then((res) => {
			if (res.ok) {
				return res.json()
			}
			return Promise.reject(res)
		})
		.then((data) => clb(data))
		.catch((error) => {
			const code = error.status
			error.json().then((e) => createErrorCard(e, code))
		})
}
