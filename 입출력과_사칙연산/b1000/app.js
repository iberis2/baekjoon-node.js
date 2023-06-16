const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().split(' ')
const num1 = +input[0]
const num2 = +input[1]

function solution(a, b) {
  console.log(a + b)
}

solution(num1, num2)
