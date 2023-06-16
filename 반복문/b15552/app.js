// '/dev/stdin'
let [len, ...input] = require('fs').readFileSync('./input.txt').toString().trim().split(/\n/)

// input [ '1 1', '12 34', '5 500', '40 60', '1000 1000' ]

function solution(len, input) {
  let answer = ''
  for (let i = 0; i < len; ++i) {
    let [num1, num2] = input[i].split(' ')
    answer += +num1 + +num2 + '\n'
  }
  console.log(answer)
}

solution(len, input)
