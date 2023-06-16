// '/dev/stdin'
const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString()
input = +input

function solution(y) {
  console.log(y - 543)
}
solution(input)
