const prompt = require('prompt-sync')();

let grade = prompt('Enter grade: ')
let letterGrade = ''
switch (true) {
    case (grade >= 80 && grade <=100):
        letterGrade = 'A'
        break
    case (grade >= 70 && grade < 80):
        letterGrade = 'B'
        break
    case (grade >=60 && grade < 70):
        letterGrade = 'C'
        break
    case (grade >= 50 && grade < 60):
        letterGrade = 'D'
        break
    default:
        letterGrade = 'F'
        break
}
console.log(letterGrade)

let month = prompt('Enter a month: ')
const autumn = ['September', 'October', 'November']
const winter = ['December', 'January', 'February']
const spring = ['March', 'April', 'May']
const summer = ['June', 'July', 'August']
if (autumn.includes(month)) {
    console.log('The season is Autumn')
} else if (winter.includes(month)) {
    console.log('The season is Winter')
} else if (spring.includes(month)) {
    console.log('The season is Spring')
} else if (summer.includes(month)) {
    console.log('The season is Summer')
} else {
    console.log('Invalid month')
}

let day = prompt('What is the day today? ').toLowerCase()
const weekend = ['saturday', 'sunday']
const weekday = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
if (weekday.includes(day)) {
    console.log(`${day} is a weekday`)
} else if (weekend.includes(day)) {
    console.log(`${day} is a weekend`)
} else {
    console.log('Invalid day')
}

switch (month.toLowerCase()) {
    case 'january':
        console.log('January has 31 days')
        break
    case 'february':
        console.log('February has 28 days')
        break
    case 'march':
        console.log('March has 31 days')
        break
    case 'april':
        console.log('April has 30 days')
        break
    case 'may':
        console.log('May has 31 days')
        break
    case 'june':
        console.log('June has 30 days')
        break
    case 'july':
        console.log('July has 31 days')
        break
    case 'august':
        console.log('August has 31 days')
        break
    case 'september':
        console.log('September has 30 days')
        break
    case 'october':
        console.log('October has 31 days')
        break
    case 'november':
        console.log('November has 30 days')
        break
    case 'december':
        console.log('December has 31 days')
        break
    default:
        console.log('Ivalid month')
        break
}
