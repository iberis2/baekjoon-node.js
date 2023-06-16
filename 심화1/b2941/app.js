const input = require('fs').readFileSync('./input.txt').toString().trim()

function solution(input) {
  const re = /(c=|c-|dz=|d-|lj|nj|s=|z=|[a-z])/g
  console.log(input.match(re).length)
}

solution(input)
