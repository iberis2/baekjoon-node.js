// '/dev/stdin'
let [counts, input, num] = require('fs').readFileSync('./input.txt').toString().trim().split('\n')
counts = Number(counts)
input = input.split(' ').map(Number)
num = Number(num)
// counts: 11
// input: [ 1, 4, 1, 2, 4, 2, 4, 2, 3, 4, 4 ]
// num 2

function solution(counts, input, num) {
  const answer = input.filter(ele => ele === num)
  console.log(answer.length)
}

solution(counts, input, num)
