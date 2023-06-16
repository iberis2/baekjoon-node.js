// '/dev/stdin'
const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')
// [ 'ABCDE', 'abcde', '01234', 'FGHIJ', 'fghij' ]

function solution(input) {
  let longest = input.reduce((acc, cur) => (acc < cur.length ? cur.length : acc), 0)

  let answer = ''
  for (let col = 0; col < longest; col++) {
    for (let row = 0; row < input.length; row++) {
      answer += input[row][col] ? input[row][col] : ''
    }
  }
  console.log(answer)
}

solution(input)
