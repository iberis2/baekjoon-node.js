// '/dev/stdin'
let [[N, M], ...input] = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(/\n/)
  .map(el => el.split(' ').map(Number))
console.log(N, M, input)

// N: 5 M: 4 input: [ [ 1, 2 ], [ 3, 4 ], [ 1, 4 ], [ 2, 2 ] ]

function solution(basketNumber, count, input) {
  let basket = [...Array(basketNumber + 1)].map((_, idx) => idx)
  for (let i = 0; i < count; i++) {
    let [start, finish] = input[i]
    let reverse = basket.slice(start, finish + 1).reverse()
    basket = [...basket.slice(0, start), ...reverse, ...basket.slice(finish + 1)]
  }
  console.log(...basket.slice(1))
}

solution(N, M, input)
