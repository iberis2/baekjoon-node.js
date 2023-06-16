// '/dev/stdin'
let [N, X, ...input] = require('fs').readFileSync('./input.txt').toString().trim().split(/ |\n/)
N = Number(N)
X = Number(X)
input = input.map(Number)

// N: 10
// X: 5
// input: [ 1, 10, 4, 9, 2, 3,  8, 5, 7, 6 ]

function solution(N, X, input) {
  const answer = input.filter(ele => ele < X)
  console.log(...answer)
}

solution(N, X, input)
