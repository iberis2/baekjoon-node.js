// '/dev/stdin'
const fs = require('fs')
const [a, b, c] = fs.readFileSync('./input.txt').toString().trim().split(/ /).map(Number)

function solution(a, b, c) {
  if (a === b || a === c) {
    if (b === c) {
      console.log(10000 + a * 1000)
    } else {
      console.log(1000 + a * 100)
    }
  } else if (b === c) {
    console.log(1000 + b * 100)
  } else {
    console.log(Math.max(a, b, c) * 100)
  }
}

solution(a, b, c)
