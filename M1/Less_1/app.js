// ⁡⁣⁢⁣​‌‌‍Модуль 𝟭. Заняття 𝟭. Змінні, типи та оператори.​⁡

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ​‌‍‌⁡⁢⁢⁢Example 1 - Математичні оператори⁡​
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47
// const grapes = 135

// const total = apples + grapes
// const diff = apples - grapes

// console.log('total', total)
// console.log('diff', diff)

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁢⁢​‌‍‌Example 2 - Комбіновані оператори​⁡
// let number = 10
// number = number + 1
// // +=
// // number **= 2

// number++
// number--

// console.log('number :>> ', number)
// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100
// // students = students + 1
// students += 1
// students++
// console.log(students)

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ​‌‍‌⁡⁢⁢⁢Example 3 - Пріоритет операторів⁡​
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 5
// console.log(result)

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁢⁢​‌‍‌Example 4 - Клас Math​⁡

// const result = Math.pow(10, 2)
// console.log('result :>> ', result)
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value.
// Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.000001
// const round = Math.round(value)
// const ceil = Math.ceil(value)
// const floor = Math.floor(value)

// console.log('round :>> ', round)
// console.log('ceil :>> ', ceil)
// console.log('floor :>> ', floor)

// let number = 10
// number = number / 2
// number /=2
// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁢⁢​‌‍‌Example 5 - Шаблонні рядки​⁡

// const firstName = 'Alex Acolor Ablue'
// const secondName = 'Alexov'
// const fullName = firstName + ' ' + secondName + '!'
// const fullName = `${firstName} ${secondName}!`
// console.log('fullName :>> ', fullName)
// const result = firstName.indexOf('3')
// console.log('result :>> ', result)
// console.log('firstName[result] :>> ', firstName[result])
// console.log('firstName.length :>> ', secondName[secondName.length - 1])

// const color = 'color'
// const lengthColor = color.length
// const index = firstName.indexOf(color)
// const findIndexNameColor = index + lengthColor + 1
// const finnedColor = firstName.slice(findIndexNameColor)
// console.log('finnedColor :>> ', finnedColor)

// const name = 'Alex'

// const result = name.toUpperCase().includes('ALE')
// console.log('result :>> ', result)

// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = 'Cyberdyne Systems'
// const repairBots = 'red'
// const defenseBots = 50
// const name = `${repairBots}+100`
// console.log(`${companyName} has ${repairBots} ${defenseBots} bots in stock`)

// console.log(message) // "Cyberdyne Systems has 200 bots in stock"

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁢⁢​‌‍‌Example 6 - Методи рядків та чейнінг​⁡
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити
// вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа,
// а в вигляді рядків (спеціально для завдання).
// Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = '24,7'
// let height = '1.75'

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁢⁢​‌‍‌Example 7 - Оператори порівняння та приведення типів​⁡
// Яким буде результат виразів?

// console.log(5 > 4)

// console.log(10 >= '7x')

// console.log('112' > '12')

// console.log('2' < '12')

// console.log('4' == 4)

// console.log('6' === 6)

// console.log('false' === false)

// console.log(Number(undefined))

// console.log(1 == true)

// console.log(1 === true)

// console.log('0' == false)

// console.log('0' === false)

// console.log('Papaya' < 'papaya')
// console.log('p', 'p'.charCodeAt())
// console.log('P', 'P'.charCodeAt())

// console.log('Papaya' === 'papaya')

// console.log(undefined == false)

// console.log(undefined == null)

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁢⁢​‌‍‌Example 8 - Логічні оператори​⁡
// Яким буде результат виразів?

// console.log(true && null && 12 && 12)

// console.log(false && 3)

// console.log(true && 4 && 'kiwi')

// console.log(true && false && 'kiwi')

// console.log(false || 0 || null)

// console.log(true || 3 || 4)

// console.log(0 || false || 7)

// console.log(null || 2 || undefined)

// console.log((1 && null && 2) > 0)

console.log(null || (2 && 3) || 4)

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁢⁢​‌‍‌Example 9 - Значення за замовчуванням та оператор нульового злиття​⁡
// Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue,
// якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue.
// Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false.
// Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = 0
// const defaultValue = 10

// const value = incomingValue || defaultValue
// console.log(value)

// ⁡⁢⁢⁢_______________________________________________________________________________________________________________________________________⁡

// ⁡⁢⁢⁢​‌‍‌Example 10 - Оператор % та методи рядків​⁡
// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01
// const totalMinutes = 70
