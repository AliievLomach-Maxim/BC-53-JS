const persons = [
	{
		name: 'Michel Legrand',
		src: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Michel_Legrand_Cabourg_2015.jpg',
		alt: 'Michel Legrand conducting his orcherstra.',
		info: 'Michel Legrand conducting his orchestra.',
	},
	{
		name: 'Hanry Ford',
		src: 'https://www.thoughtco.com/thmb/u43KDJGdbvu_0qW8k_bDUf2z1-Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-515461052-dd32da349fa5499fb777ce0214a956e8.jpg',
		alt: 'Hanry Ford conducting his orcherstra.',
		info: 'Hanry Ford conducting his orchestra.',
	},
	{
		name: 'Rick Astley',
		src: 'https://m.media-amazon.com/images/M/MV5BOTNmZGU0MDYtNDE4Zi00NTE4LTg0ZGEtYzBjOWNjOTkwMzdlXkEyXkFqcGdeQXVyMTg3Nzg5ODY@._V1_.jpg',
		alt: 'Rick Astley conducting his orcherstra.',
		info: 'Rick Astley conducting his orchestra.',
	},
	{
		name: 'Nikola Tesla',
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Tesla_circa_1890.jpeg/274px-Tesla_circa_1890.jpeg',
		alt: 'Nikola Tesla conducting his orcherstra.',
		info: 'Nikola Tesla conducting his orchestra.',
	},
]

// const result = persons.reduce(
// 	(acc, el) =>
// 		acc +
// 		`
// <h2 id="title">${el.name}</h2>
// 	<figure id='img-div'>
// 		<img id='image' src=${el.src} alt=${el.alt}/>
// 		<figcaption id='img-caption'>
// 			${el.info}
// 		</figcaption>
// 	</figure>`,
// 	''
// )
const main = document.querySelector('main')

// main.insertAdjacentHTML('afterbegin', result)

const result = persons.map((el) => {
	const h2 = document.createElement('h2')
	h2.id = 'title'
	h2.textContent = el.name

	const figure = document.createElement('figure')
	figure.id = 'img-div'

	const img = document.createElement('img')
	img.id = 'image'
	img.src = el.src
	img.alt = el.alt

	const figc = document.createElement('figcaption')
	figc.id = 'img-caption'
	figc.textContent = el.info

	figure.append(img, figc)
	return [h2, figure]
})
main.append(...result.flat())

console.table('main :>> ', main)

{
	/* <h2 id="title">- Michel Legrand -</h2> 
	<figure id="img-div">
		<img
			id="image"
			src="https://m.media-amazon.com/images/M/MV5BMTYxODkyODEzNl5BMl5BanBnXkFtZTcwMTY0MTY1OQ@@._V1_.jpg"
			alt="Michel Legrand conducting his orchestra."
		/>
		<figcaption id="img-caption">
			Michel Legrand conducting his orcherstra.
		</figcaption>
	</figure> */
}
