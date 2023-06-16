// '/dev/stdin'
const inputs = require('fs').readFileSync('./input.txt').toString().trim().split('\n')

// inputs [ '1 1', '2 3', '3 4', '9 8', '5 2' ]

function solution(inputs) {
  for (let i = 0; i < inputs.length; ++i) {
    let [num1, num2] = inputs[i].split(' ')
    console.log(Number(num1) + Number(num2))
  }
}

solution(inputs)
