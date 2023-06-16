// '/dev/stdin'
const [count, ...input] = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(/ |\n/)
  .map(Number)

// count: 3 input: [ 40, 80, 60 ]

function solution(count, input) {
  const heightScore = Math.max(...input)
  const sum = input.reduce((acc, cur) => {
    return (acc += (cur / heightScore) * 100)
  }, 0)
  console.log(sum / count)
}
solution(count, input)
