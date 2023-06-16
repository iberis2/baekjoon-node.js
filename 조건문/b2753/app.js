// '/dev/stdin'
const fs = require('fs')
const input = Number(fs.readFileSync('./input.txt').toString().split(' '))

function solution(y) {
  if (y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0)) {
    console.log(1)
  } else {
    console.log(0)
  }
}

solution(input)
