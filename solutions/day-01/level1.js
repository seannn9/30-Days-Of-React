// 1
const arr = Array()
// 2
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 3
console.log("Length: ", nums.length)
// 4
console.log("First: ", nums[0])
console.log("Middle: ", [nums[nums.length/2-1], nums[nums.length/2]])
console.log("Last: ", nums[nums.length-1])
// 5
const mixedDataTypes = ['Sean', 9, 10.5, true, 'Ulric', 1000, false]
console.log(mixedDataTypes.length)
// 6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// 7 & 8
console.log(itCompanies," ", itCompanies.length)
// 9 
console.log("First: ", itCompanies[0])
let length = itCompanies.length
length % 2 == 1 ? console.log("Middle: ",itCompanies[Math.floor(length/2)]) 
        : console.log("Middle: ", [itCompanies[length/2-1],itCompanies[length/2]])
console.log("Last: ", itCompanies[itCompanies.length-1])
// 10
for (let i = 0; i < length; i++) {
    console.log(itCompanies[i])
}
// 11
for (let i = 0; i < length; i++) {
    console.log(itCompanies[i].toUpperCase())
}
// 12
console.log(itCompanies.join(', '), 'are big IT copmpanies.')
// 13
let company = 'Nvidia'
itCompanies.includes(company) ? console.log(company)
                            : console.log(company, 'not found')
// 14
const filtered = [] // companies with more than 1 o is removed
for (let i = 0; i < length; i++) {
    let o = 0
    for (let j = 0; j < itCompanies[i].length; j++) {
        if (itCompanies[i][j] == 'o' || itCompanies[i][j] == 'O') {
            o+=1;
        }
    }
    if (o <= 1) {
        filtered.push(itCompanies[i])
    }
}
console.log(filtered)
// 15
console.log(filtered.sort())
// 16
console.log(filtered.reverse())
