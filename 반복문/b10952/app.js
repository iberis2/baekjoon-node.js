// '/dev/stdin'
let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')
input = input.map(str => {
  const [num1, num2] = str.split(' ')
  return [+num1, +num2]
})

// input [ [ 1, 1 ], [ 2, 3 ], [ 3, 4 ], [ 9, 8 ], [ 5, 2 ], [ 0, 0 ] ]

function solution(array) {
  array.forEach(element => {
    const [num1, num2] = element
    num1 + num2 && console.log(num1 + num2)
  })
}

solution(input)
