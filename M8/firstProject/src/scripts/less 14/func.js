import { generateRandomColor } from './app'

function fn(number) {
	generateRandomColor()
	return number + Math.pow(number)
}

export default fn
