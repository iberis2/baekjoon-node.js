// '/dev/stdin'
let [count, input] = require('fs').readFileSync('./input.txt').toString().trim().split(/\n/)
count = +count
input = input.split('').map(Number)

// count: 5 input: [ 5, 4, 3, 2, 1 ]

function solution(count, input) {
  let answer = input.reduce((acc, cur) => (acc += cur))
  console.log(answer)
}

solution(count, input)
