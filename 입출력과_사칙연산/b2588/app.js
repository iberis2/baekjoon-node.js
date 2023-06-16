// '/dev/stdin'
const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().split('\n')
const A = +input[0]
const B = +input[1]

function solution(num1, num2) {
  const units = num2 % 10
  const tens = Math.floor(num2 / 10) % 10
  const hundreds = Math.floor(num2 / 100)

  const multiply1 = num1 * units
  const multiply10 = num1 * tens
  const multiply100 = num1 * hundreds

  console.log(multiply1)
  console.log(multiply10)
  console.log(multiply100)
  console.log(multiply1 + multiply10 * 10 + multiply100 * 100)
}

solution(A, B)
