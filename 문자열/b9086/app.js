// '/dev/stdin'
let [length, ...input] = require('fs').readFileSync('./input.txt').toString().trim().split('\n')
length = Number(length)

// length: 3 input: [ 'ACDKJFOWIEGHE', 'O', 'AB' ]

function solution(length, input) {
  for (let i = 0; i < length; i++) {
    console.log(input[i][0] + input[i][input[i].length - 1])
  }
}

solution(length, input)
