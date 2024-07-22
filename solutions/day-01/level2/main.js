const countries_export = require('./countries.js')
const webTechs_export = require('./web_techs.js')

let countries = new countries_export()
let webTechs = new webTechs_export()

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let newText = text.replace(/[,.]/g, '')

console.log(newText)

const textArr = newText.split(' ')
console.log(textArr)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.includes('Meat') ? console.log(shoppingCart.indexOf('Meat'))
    : shoppingCart.unshift('Meat')

shoppingCart.includes('Sugar') ? console.log(shoppingCart.indexOf('Sugar'))
    : shoppingCart.push('Sugar')

shoppingCart.includes('Honey') ? shoppingCart.splice(shoppingCart.indexOf('Honey'), shoppingCart.indexOf('Honey')+1)
    : console.log('No Honey')

shoppingCart.includes('Tea') ? shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea')
    : console.log('No Tea')
console.log(shoppingCart)

countries.includes('Ethiopia') ? console.log('ETHIOPIA')
    : countries.push('Ethiopia')
console.log(countries)

webTechs.includes('Sass') ? console.log('Sass is a CSS preprocessor')
    : webTechs.push('Sass')
console.log(webTechs)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)