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
    console.log(`${day.to()} is a weekday`)
} else if (weekend.includes(day)) {
    console.log(`${day.toUpperCase()} is a weekend`)
} else {
    console.log('Invalid day')
}