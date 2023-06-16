// '/dev/stdin'
let [len, ...inputs] = require('fs').readFileSync('./input.txt').toString().trim().split('\n')

function solution(len, inputs) {
  let answer = ''
  for (let i = 0; i < len; ++i) {
    let [num1, num2] = inputs[i].split(' ')
    answer += `Case #${i + 1}: ${num1} + ${num2} = ${+num1 + +num2}` + '\n'
  }
  console.log(answer)
}

solution(len, inputs)
