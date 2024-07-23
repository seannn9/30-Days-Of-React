const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)
const min = ages[0]
const max = ages[ages.length-1]
console.log("Min:", min, "\nMax:", max)
let median = 0
const agesLength = ages.length
agesLength % 2 == 1 ? median = ages[Math.floor(agesLength/2)]
    : median = (ages[agesLength/2-1] + ages[agesLength/2]) / 2
console.log("Median:", median)
let average = ages[0]
for (let i = 1; i < agesLength; i++) {
    average += ages[i]
}
average = average/ages.length
console.log("Average:", average)
const range = max - min
console.log("Range:", range)
const absolute = Math.abs((min-average), (max-average))
console.log("Absolute:", absolute)

const countries_export = require('./countries.js')
let countries = new countries_export()
countries = countries.slice(0, 10)
countriesLength = countries.length
console.log(countries)
countriesLength % 2 == 1 ? console.log(countries[Math.floor(countriesLength/2)])
    : console.log([countries[countriesLength/2-1], countries[countriesLength/2]])
const firstHalf = []
const secondHalf = []
for (let i = 0; i < Math.floor(countriesLength/2); i++) {
    firstHalf.push(countries[i])
}
for (let i = Math.floor(countriesLength/2); i < countriesLength; i++) {
    secondHalf.push(countries[i])
}
console.log(firstHalf)
console.log(secondHalf)